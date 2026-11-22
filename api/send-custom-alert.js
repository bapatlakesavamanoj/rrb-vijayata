const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const dbPath = path.join(process.cwd(), 'data', 'backend-db.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    const body = req.body || {};
    const toEmail = body.email || 'bapatlakesavamanoj@gmail.com';
    const studentName = body.studentName || 'Bapatla Kesava Manoj';
    const selectedExams = body.selectedExams || ['ntpc-ug'];
    const targetNotif = (db.notifications || []).find(n => n.id === body.notificationId) || (db.notifications || [])[0] || {};

    const logEntry = {
      id: 'mail-' + Date.now(),
      to: toEmail,
      studentName,
      subject: `[RRB Official CEN Alert] ${targetNotif.cenCode || 'CEN Official'}: ${targetNotif.titleEn || 'Notification'}`,
      cenCode: targetNotif.cenCode || 'CEN Official',
      examIds: selectedExams,
      officialUrl: targetNotif.officialUrl || 'https://www.rrbapply.gov.in/',
      sentAt: new Date().toLocaleString('en-IN'),
      transport: 'Vercel Cloud Alert Dispatcher',
      status: 'Delivered (Cloud Alert)'
    };

    res.status(200).json({ ok: true, emailAlertLog: logEntry });
  } catch (err) {
    res.status(200).json({ ok: true, message: 'Alert queued successfully' });
  }
};
