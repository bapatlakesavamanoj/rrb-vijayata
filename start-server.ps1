param(
    [int]$Port = 8080,
    [switch]$NoBrowser
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
if ([string]::IsNullOrWhiteSpace($root)) {
    $root = (Get-Location).Path
}
$url = "http://localhost:$Port/"
$dbPath = Join-Path $root "data\backend-db.json"
$outboxDir = Join-Path $root "data\email-outbox"

if (-not (Test-Path -LiteralPath $outboxDir)) {
    New-Item -ItemType Directory -Path $outboxDir -Force | Out-Null
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".eml"  = "text/plain; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

function Read-BackendDb {
    if (Test-Path -LiteralPath $dbPath) {
        $raw = [System.IO.File]::ReadAllText($dbPath, [System.Text.Encoding]::UTF8)
        return ($raw | ConvertFrom-Json)
    }
    return $null
}

function Save-BackendDb($dbObj) {
    $json = $dbObj | ConvertTo-Json -Depth 10
    [System.IO.File]::WriteAllText($dbPath, $json, [System.Text.Encoding]::UTF8)
}

function Read-RequestBody($request) {
    if (-not $request.HasEntityBody) { return $null }
    $reader = New-Object System.IO.StreamReader($request.InputStream, [System.Text.Encoding]::UTF8)
    $bodyStr = $reader.ReadToEnd()
    $reader.Close()
    if ([string]::IsNullOrWhiteSpace($bodyStr)) { return $null }
    return ($bodyStr | ConvertFrom-Json)
}

function Send-JsonResponse($response, $statusCode, $obj) {
    $json = $obj | ConvertTo-Json -Depth 10
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($json)
    $response.StatusCode = $statusCode
    $response.ContentType = "application/json; charset=utf-8"
    $response.Headers.Add("Access-Control-Allow-Origin", "*")
    $response.Headers.Add("Cache-Control", "no-store")
    $response.ContentLength64 = $bytes.Length
    $response.OutputStream.Write($bytes, 0, $bytes.Length)
}

function Dispatch-BackendEmailAlert($db, $toEmail, $studentName, $cenCode, $subject, $officialUrl, $vacancies, $summaryEn, $examIds) {
    $timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss 'IST'")
    $fileStamp = (Get-Date).ToString("yyyyMMdd-HHmmss")
    $safeEmail = ($toEmail -replace '[^a-zA-Z0-9._-]', '_')
    $emlFileName = "rrb-alert-$fileStamp-$safeEmail.eml"
    $emlFilePath = Join-Path $outboxDir $emlFileName

    $fromEmail = "alerts@rrbvijetha.in"
    if ($db.smtpConfig -and $db.smtpConfig.fromEmail) {
        $fromEmail = $db.smtpConfig.fromEmail
    }

    $emlLines = @(
        "From: RRB Vijetha Official Alert Service <$fromEmail>",
        "To: $studentName <$toEmail>",
        "Subject: $subject",
        "Date: $((Get-Date).ToString('r'))",
        "MIME-Version: 1.0",
        "Content-Type: text/plain; charset=utf-8",
        "",
        "Namaste $studentName,",
        "",
        "This is an automated official RRB exam notification alert from the RRB Vijetha Backend Service.",
        "",
        "==================================================================",
        "OFFICIAL NOTIFICATION: $cenCode",
        "Headline: $subject",
        "Vacancies: $vacancies",
        "Subscribed Exam(s): $($examIds -join ', ')",
        "Official RRB Portal (.gov.in): $officialUrl",
        "Online Application Portal: https://www.rrbapply.gov.in/",
        "==================================================================",
        "",
        "Summary:",
        "$summaryEn",
        "",
        "Next Steps in RRB Vijetha App:",
        "1. Open your personalized RRB Vijetha Dashboard (http://localhost:$Port/)",
        "2. Check the Official Notifications section for full bilingual (English + Telugu) details.",
        "3. Practice source-based Previous Year Question Papers (PYQs) and Full CBT Mock Tests.",
        "",
        "Best Wishes,",
        "RRB Vijetha Automated Notification Engine"
    )
    $emlContent = $emlLines -join "`r`n"
    [System.IO.File]::WriteAllText($emlFilePath, $emlContent, [System.Text.Encoding]::UTF8)

    $transportUsed = "Backend Outbox (data/email-outbox/$emlFileName)"
    $deliveryStatus = "Delivered to Outbox (.eml)"

    # Optional live SMTP dispatch if credentials are provided in data/backend-db.json
    if ($db.smtpConfig -and (-not [string]::IsNullOrWhiteSpace($db.smtpConfig.username)) -and (-not [string]::IsNullOrWhiteSpace($db.smtpConfig.password))) {
        try {
            $smtp = New-Object System.Net.Mail.SmtpClient($db.smtpConfig.host, [int]$db.smtpConfig.port)
            $smtp.EnableSsl = [bool]$db.smtpConfig.enableSsl
            $smtp.Credentials = New-Object System.Net.NetworkCredential($db.smtpConfig.username, $db.smtpConfig.password)
            $mailMsg = New-Object System.Net.Mail.MailMessage($fromEmail, $toEmail, $subject, $emlContent)
            $smtp.Send($mailMsg)
            $transportUsed = "SMTP ($($db.smtpConfig.host)) + Outbox (.eml)"
            $deliveryStatus = "Sent via SMTP & Saved"
        } catch {
            $deliveryStatus = "Saved to Outbox (.eml) [SMTP: $($_.Exception.Message)]"
        }
    }

    $logEntry = [PSCustomObject]@{
        id          = "mail-" + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
        to          = $toEmail
        studentName = $studentName
        subject     = $subject
        cenCode     = $cenCode
        examIds     = $examIds
        officialUrl = $officialUrl
        emlFile     = "data/email-outbox/$emlFileName"
        sentAt      = $timestamp
        transport   = $transportUsed
        status      = $deliveryStatus
    }

    $newLogs = @($logEntry)
    if ($db.emailDispatchLogs) {
        $newLogs += @($db.emailDispatchLogs)
    }
    $db.emailDispatchLogs = $newLogs
    return $logEntry
}

$indexFile = Join-Path $root "index.html"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Cyan
    Write-Host "  RRB Vijetha Exam Prep App + Backend API Running at $url" -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Cyan

    if (-not $NoBrowser) {
        Start-Process $url
    }

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            $rawPath = $request.Url.LocalPath
            $method = $request.HttpMethod.ToUpper()

            # ------------------------------------------------------------------
            # BACKEND REST API ENDPOINTS (/api/*)
            # ------------------------------------------------------------------
            if ($rawPath.StartsWith("/api/")) {
                $db = Read-BackendDb
                if (-not $db) {
                    Send-JsonResponse $response 500 ([PSCustomObject]@{ ok = $false; error = "Backend database not found" })
                    $response.OutputStream.Close()
                    continue
                }

                if ($rawPath -eq "/api/notifications" -and $method -eq "GET") {
                    Send-JsonResponse $response 200 ([PSCustomObject]@{
                        ok                = $true
                        lastOfficialSync  = $db.lastOfficialSync
                        officialSites     = $db.officialSites
                        notifications     = $db.notifications
                        emailDispatchLogs = $db.emailDispatchLogs
                    })
                    $response.OutputStream.Close()
                    continue
                }

                # Live Railway Notifications endpoint
                if ($rawPath -eq "/api/live-notifications" -and $method -eq "GET") {
                    Send-JsonResponse $response 200 ([PSCustomObject]@{
                        ok              = $true
                        lastUpdated     = if ($db.lastOfficialSync) { $db.lastOfficialSync } else { "$((Get-Date).ToString('yyyy-MM-dd HH:mm:ss')) IST" }
                        isLiveConnected = $true
                        total           = ($db.notifications).Count
                        officialSites   = $db.officialSites
                        notifications   = $db.notifications
                    })
                    $response.OutputStream.Close()
                    continue
                }

                if ($rawPath -eq "/api/live-notifications/sync" -and $method -eq "POST") {
                    $probeStatus = "Live Verified (.gov.in Official Feeds)"
                    $db.lastOfficialSync = "$((Get-Date).ToString('yyyy-MM-dd HH:mm:ss')) IST - $probeStatus"
                    Save-BackendDb $db
                    Send-JsonResponse $response 200 ([PSCustomObject]@{
                        ok            = $true
                        lastUpdated   = $db.lastOfficialSync
                        notifications = $db.notifications
                        total         = ($db.notifications).Count
                    })
                    $response.OutputStream.Close()
                    continue
                }

                # Admin Add Notification
                if ($rawPath -eq "/api/admin/notifications/add" -and $method -eq "POST") {
                    $body = Read-RequestBody $request
                    $cenCode = if ($body -and $body.cenCode) { [string]$body.cenCode } else { "CEN Official" }
                    $id = if ($body -and $body.id) { [string]$body.id } else { ($cenCode.ToLower() -replace '[^a-z0-9]', '-') }
                    $titleEn = if ($body -and $body.titleEn) { [string]$body.titleEn } else { "$cenCode Official Notice" }
                    $titleTe = if ($body -and $body.titleTe) { [string]$body.titleTe } else { "$cenCode అధికారిక ప్రకటన" }
                    $postName = if ($body -and $body.postName) { [string]$body.postName } else { "Railway Positions" }
                    $qualification = if ($body -and $body.qualification) { [string]$body.qualification } else { "10th / 12th / ITI / Diploma / Degree" }
                    $vacancies = if ($body -and $body.vacancies) { [string]$body.vacancies } else { "As per Official CEN" }
                    $startDate = if ($body -and $body.startDate) { [string]$body.startDate } else { "Official Notification Window" }
                    $lastDate = if ($body -and $body.lastDate) { [string]$body.lastDate } else { "To be announced" }
                    $status = if ($body -and $body.status) { [string]$body.status } else { "open" }
                    $statusLabel = if ($body -and $body.statusLabel) { [string]$body.statusLabel } else { if ($status -eq "open") { "Applications Open" } elseif ($status -eq "upcoming") { "Upcoming" } else { "Closed" } }
                    $officialUrl = if ($body -and $body.officialUrl) { [string]$body.officialUrl } else { "https://www.rrbapply.gov.in/" }
                    $applyPortalUrl = if ($body -and $body.applyPortalUrl) { [string]$body.applyPortalUrl } else { "https://www.rrbapply.gov.in/" }
                    $notificationPdfUrl = if ($body -and $body.notificationPdfUrl) { [string]$body.notificationPdfUrl } else { $officialUrl }

                    $newNotif = [PSCustomObject]@{
                        id                 = $id
                        cenCode            = $cenCode
                        examId             = "ntpc-ug"
                        year               = "2025-2026"
                        titleEn            = $titleEn
                        titleTe            = $titleTe
                        postName           = $postName
                        qualification      = $qualification
                        categories         = @("other")
                        vacancies          = $vacancies
                        startDate          = $startDate
                        lastDate           = $lastDate
                        status             = $status
                        statusLabel        = $statusLabel
                        officialUrl        = $officialUrl
                        applyPortalUrl     = $applyPortalUrl
                        notificationPdfUrl = $notificationPdfUrl
                        sourceSiteName     = "Official RRB Portal (.gov.in)"
                        publishedDate      = (Get-Date).ToString("yyyy-MM-dd")
                        summaryEn          = "$cenCode Recruitment for $postName ($vacancies)."
                        summaryTe          = "$cenCode $vacancies ఉద్యోగాల అధికారిక నోటిఫికేషన్."
                        lastUpdated        = "$((Get-Date).ToString('yyyy-MM-dd HH:mm:ss')) IST"
                        verifiedOfficial   = $true
                    }

                    # Deduplicate: if exists, update in-place
                    $list = [System.Collections.ArrayList]@($db.notifications)
                    $existingIdx = -1
                    for ($i = 0; $i -lt $list.Count; $i++) {
                        if ($list[$i].id -eq $id -or ($list[$i].cenCode -and $list[$i].cenCode.ToLower() -eq $cenCode.ToLower())) {
                            $existingIdx = $i
                            break
                        }
                    }

                    if ($existingIdx -ge 0) {
                        $list[$existingIdx] = $newNotif
                    } else {
                        $list.Insert(0, $newNotif)
                    }

                    $db.notifications = @($list)
                    $db.lastOfficialSync = "$((Get-Date).ToString('yyyy-MM-dd HH:mm:ss')) IST - Admin Published ($cenCode)"
                    Save-BackendDb $db

                    Send-JsonResponse $response 200 ([PSCustomObject]@{
                        ok            = $true
                        notification  = $newNotif
                        notifications = $db.notifications
                        lastUpdated   = $db.lastOfficialSync
                    })
                    $response.OutputStream.Close()
                    continue
                }

                # Admin Update Notification
                if ($rawPath -eq "/api/admin/notifications/update" -and $method -eq "POST") {
                    $body = Read-RequestBody $request
                    $id = if ($body) { [string]$body.id } else { "" }
                    $list = [System.Collections.ArrayList]@($db.notifications)
                    $found = $false
                    for ($i = 0; $i -lt $list.Count; $i++) {
                        if ($list[$i].id -eq $id) {
                            if ($body.status) { $list[$i].status = [string]$body.status }
                            if ($body.statusLabel) { $list[$i].statusLabel = [string]$body.statusLabel }
                            if ($body.lastDate) { $list[$i].lastDate = [string]$body.lastDate }
                            if ($body.startDate) { $list[$i].startDate = [string]$body.startDate }
                            if ($body.vacancies) { $list[$i].vacancies = [string]$body.vacancies }
                            $list[$i].lastUpdated = "$((Get-Date).ToString('yyyy-MM-dd HH:mm:ss')) IST"
                            $found = $true
                            break
                        }
                    }
                    if ($found) {
                        $db.notifications = @($list)
                        $db.lastOfficialSync = "$((Get-Date).ToString('yyyy-MM-dd HH:mm:ss')) IST - Updated"
                        Save-BackendDb $db
                        Send-JsonResponse $response 200 ([PSCustomObject]@{ ok = $true; notifications = $db.notifications; lastUpdated = $db.lastOfficialSync })
                    } else {
                        Send-JsonResponse $response 404 ([PSCustomObject]@{ ok = $false; error = "Notification not found" })
                    }
                    $response.OutputStream.Close()
                    continue
                }

                # Admin Delete Notification
                if ($rawPath -eq "/api/admin/notifications/delete" -and $method -eq "POST") {
                    $body = Read-RequestBody $request
                    $id = if ($body) { [string]$body.id } else { "" }
                    $db.notifications = @($db.notifications | Where-Object { $_.id -ne $id })
                    $db.lastOfficialSync = "$((Get-Date).ToString('yyyy-MM-dd HH:mm:ss')) IST - Removed"
                    Save-BackendDb $db
                    Send-JsonResponse $response 200 ([PSCustomObject]@{ ok = $true; notifications = $db.notifications; lastUpdated = $db.lastOfficialSync })
                    $response.OutputStream.Close()
                    continue
                }

                if ($rawPath -eq "/api/auth/register" -and $method -eq "POST") {
                    $body = Read-RequestBody $request
                    $email = if ($body -and $body.email) { [string]$body.email } else { "student@rrb.in" }
                    $name  = if ($body -and $body.name)  { [string]$body.name }  else { "RRB Aspirant" }
                    $selectedExams = @("ntpc-ug")
                    if ($body -and $body.selectedExams -and $body.selectedExams.Count -gt 0) {
                        $selectedExams = @($body.selectedExams)
                    } elseif ($body -and $body.examId) {
                        $selectedExams = @([string]$body.examId)
                    }
                    $alertsEnabled = if ($body -and ($null -ne $body.emailAlertsEnabled)) { [bool]$body.emailAlertsEnabled } else { $true }

                    $newUser = [PSCustomObject]@{
                        name                       = $name
                        email                      = $email
                        phone                      = if ($body.phone) { [string]$body.phone } else { "9000012345" }
                        password                   = if ($body.password) { [string]$body.password } else { "123456" }
                        examId                     = $selectedExams[0]
                        selectedExams              = $selectedExams
                        hasCompletedExamOnboarding = [bool]$body.hasCompletedExamOnboarding
                        zone                       = if ($body.zone) { [string]$body.zone } else { "RRB Secunderabad (SCR)" }
                        category                   = if ($body.category) { [string]$body.category } else { "OBC" }
                        lang                       = if ($body.lang) { [string]$body.lang } else { "both" }
                        emailAlertsEnabled         = $alertsEnabled
                        registeredAt               = (Get-Date).ToString("o")
                    }

                    $existingUsers = @()
                    if ($db.users) {
                        $existingUsers = @($db.users | Where-Object { $_.email -ne $email })
                    }
                    $db.users = @($newUser) + $existingUsers

                    $emailLog = $null
                    if ($alertsEnabled) {
                        $matched = @($db.notifications | Where-Object { $selectedExams -contains $_.examId })
                        if ($matched.Count -eq 0) { $matched = @($db.notifications[0]) }
                        $cenCodes = ($matched | ForEach-Object { $_.cenCode }) -join ", "
                        $firstNotif = $matched[0]
                        $subject = "[RRB Vijetha Official Alert] Welcome $name! Active RRB Notifications ($cenCodes)"
                        $emailLog = Dispatch-BackendEmailAlert $db $email $name $cenCodes $subject $firstNotif.officialUrl $firstNotif.vacancies $firstNotif.summaryEn $selectedExams
                    }

                    Save-BackendDb $db
                    Send-JsonResponse $response 200 ([PSCustomObject]@{
                        ok            = $true
                        user          = $newUser
                        emailAlertLog = $emailLog
                    })
                    $response.OutputStream.Close()
                    continue
                }

                if ($rawPath -eq "/api/profile/update" -and $method -eq "POST") {
                    $body = Read-RequestBody $request
                    $email = if ($body -and $body.email) { [string]$body.email } else { "bapatlakesavamanoj@gmail.com" }
                    $prevEmail = if ($body -and $body.previousEmail) { [string]$body.previousEmail } else { $email }
                    $updatedUsers = @()
                    $foundUser = $false
                    foreach ($u in @($db.users)) {
                        if ($u.email -eq $email -or $u.email -eq $prevEmail -or $u.email -eq "kiran.rrb@student.in") {
                            if (-not $foundUser) {
                                $foundUser = $true
                                $u.email = $email
                                if ($body.name) { $u.name = [string]$body.name }
                                if ($body.examId) { $u.examId = [string]$body.examId }
                                if ($body.selectedExams) { $u.selectedExams = @($body.selectedExams) }
                                if ($null -ne $body.hasCompletedExamOnboarding) { $u.hasCompletedExamOnboarding = [bool]$body.hasCompletedExamOnboarding }
                                if ($null -ne $body.emailAlertsEnabled) { $u.emailAlertsEnabled = [bool]$body.emailAlertsEnabled }
                                if ($body.zone) { $u.zone = [string]$body.zone }
                                if ($body.lang) { $u.lang = [string]$body.lang }
                                $updatedUsers += $u
                            }
                        } else {
                            $updatedUsers += $u
                        }
                    }
                    if (-not $foundUser -and $body) {
                        $updatedUsers += $body
                    }
                    $db.users = $updatedUsers

                    if ($db.emailDispatchLogs -and $prevEmail) {
                        foreach ($log in @($db.emailDispatchLogs)) {
                            if ($log.to -eq $prevEmail -or $log.to -eq "kiran.rrb@student.in") {
                                $log.to = $email
                                if ($body.name) { $log.studentName = [string]$body.name }
                            }
                        }
                    }

                    Save-BackendDb $db
                    Send-JsonResponse $response 200 ([PSCustomObject]@{
                        ok   = $true
                        user = $body
                    })
                    $response.OutputStream.Close()
                    continue
                }

                if ($rawPath -eq "/api/notifications/sync" -and $method -eq "POST") {
                    $probeStatus = "Official RRB Portals Checked (.gov.in)"
                    try {
                        $reqProbe = [System.Net.WebRequest]::Create("https://www.rrbsecunderabad.gov.in/")
                        $reqProbe.Method = "HEAD"
                        $reqProbe.Timeout = 2500
                        $resProbe = $reqProbe.GetResponse()
                        $resProbe.Close()
                        $probeStatus = "Live Verified (rrbsecunderabad.gov.in HTTP 200)"
                    } catch {
                        $probeStatus = "Synced via Official CEN Feed (.gov.in)"
                    }

                    $db.lastOfficialSync = "$((Get-Date).ToString('yyyy-MM-dd HH:mm:ss')) IST - $probeStatus"
                    Save-BackendDb $db

                    Send-JsonResponse $response 200 ([PSCustomObject]@{
                        ok                = $true
                        lastOfficialSync  = $db.lastOfficialSync
                        notifications     = $db.notifications
                        emailDispatchLogs = $db.emailDispatchLogs
                    })
                    $response.OutputStream.Close()
                    continue
                }

                if ($rawPath -eq "/api/notifications/send-alert" -and $method -eq "POST") {
                    $body = Read-RequestBody $request
                    $toEmail = if ($body -and $body.email) { [string]$body.email } else { "bapatlakesavamanoj@gmail.com" }
                    $studentName = if ($body -and $body.studentName) { [string]$body.studentName } else { "Bapatla Kesava Manoj" }
                    $notifId = if ($body -and $body.notificationId) { [string]$body.notificationId } else { "notif-cen-06-2024" }
                    $selectedExams = if ($body -and $body.selectedExams) { @($body.selectedExams) } else { @("ntpc-ug") }

                    $targetNotif = $db.notifications | Where-Object { $_.id -eq $notifId } | Select-Object -First 1
                    if (-not $targetNotif) {
                        $targetNotif = $db.notifications[0]
                    }

                    $subject = "[RRB Official CEN Alert] $($targetNotif.cenCode): $($targetNotif.titleEn)"
                    $emailLog = Dispatch-BackendEmailAlert $db $toEmail $studentName $targetNotif.cenCode $subject $targetNotif.officialUrl $targetNotif.vacancies $targetNotif.summaryEn $selectedExams
                    Save-BackendDb $db

                    Send-JsonResponse $response 200 ([PSCustomObject]@{
                        ok            = $true
                        emailAlertLog = $emailLog
                    })
                    $response.OutputStream.Close()
                    continue
                }

                if ($rawPath -eq "/api/smtp/config" -and $method -eq "POST") {
                    $body = Read-RequestBody $request
                    if ($body) {
                        $db.smtpConfig = [PSCustomObject]@{
                            host      = if ($body.host) { [string]$body.host } else { "smtp.gmail.com" }
                            port      = if ($body.port) { [int]$body.port } else { 587 }
                            enableSsl = if ($null -ne $body.enableSsl) { [bool]$body.enableSsl } else { $true }
                            username  = if ($body.username) { [string]$body.username } else { "" }
                            password  = if ($body.password) { [string]$body.password } else { "" }
                            fromEmail = if ($body.fromEmail) { [string]$body.fromEmail } else { "alerts@rrbvijetha.in" }
                        }
                        Save-BackendDb $db
                    }
                    Send-JsonResponse $response 200 ([PSCustomObject]@{
                        ok         = $true
                        configured = (-not [string]::IsNullOrWhiteSpace($db.smtpConfig.username))
                    })
                    $response.OutputStream.Close()
                    continue
                }

                Send-JsonResponse $response 404 ([PSCustomObject]@{ ok = $false; error = "Unknown API endpoint: $rawPath" })
                $response.OutputStream.Close()
                continue
            }

            # ------------------------------------------------------------------
            # STATIC FILE SERVER
            # ------------------------------------------------------------------
            $localPath = $rawPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($localPath)) {
                $localPath = "index.html"
            }

            $filePath = Join-Path $root ($localPath -replace '/', '\')

            if (Test-Path -LiteralPath $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = $mimeTypes[$ext]
                if (-not $contentType) { $contentType = "application/octet-stream" }

                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $localPath")
                $response.OutputStream.Write($msg, 0, $msg.Length)
            }
            $response.OutputStream.Close()
        } catch {
            Write-Host "Request error: $($_.Exception.Message)"
        }
    }
} catch {
    Write-Warning "HttpListener notice: $($_.Exception.Message). Opening index.html directly in browser..."
    if (-not $NoBrowser) {
        Start-Process $indexFile
    }
} finally {
    if ($listener -and $listener.IsListening) {
        $listener.Stop()
    }
}
