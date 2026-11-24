/**
 * Automated Test Suite for RRB Vijetha Platform
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
let failures = 0;
let passes = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passes++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failures++;
  }
}

console.log('================================================================');
console.log('🧪 RUNNING RRB VIJETHA AUTOMATED VERIFICATION SUITE');
console.log('================================================================');

// 1. Test PWA Manifest
console.log('\n[Suite 1: PWA Manifest & App Shell]');
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'));
assert(manifest.name && manifest.name.includes('RRB Vijetha'), 'Manifest has correct application name');
assert(manifest.start_url === '/', 'Manifest start_url is root "/"');
assert(Array.isArray(manifest.icons) && manifest.icons.length >= 2, 'Manifest includes icons for mobile and desktop');

// 2. Test Vercel Configuration
console.log('\n[Suite 2: Vercel Configuration & Serverless Routes]');
const vercelConfig = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));
assert(vercelConfig.version === 2, 'Vercel config is version 2');
assert(vercelConfig.outputDirectory === 'public', 'outputDirectory is "public" for clean static CDN deployment');
assert(Array.isArray(vercelConfig.rewrites) && vercelConfig.rewrites.length > 0, 'Rewrites array is configured');

// 3. Test Service Worker Assets Cache
console.log('\n[Suite 3: Service Worker Precache List]');
const swCode = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
assert(swCode.includes("'/index.html'") && swCode.includes("'/styles.css'"), 'Service worker precaches core shell assets');
assert(swCode.includes("'/js/app.js'"), 'Service worker precaches app.js');

// 4. Test Data Integrity
console.log('\n[Suite 4: Questions & Syllabus Data Integrity]');
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);

// Load data files in sandbox
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/exams-and-subjects.js'), 'utf8'), sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/questions-and-papers.js'), 'utf8'), sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/math-textbook-chapters.js'), 'utf8'), sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/all-subject-subtopics.js'), 'utf8'), sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/latest-jobs-data.js'), 'utf8'), sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/notifications-data.js'), 'utf8'), sandbox);

const exams = sandbox.window.RRB_EXAMS || [];
assert(exams.length >= 4, `Exams dataset loaded ${exams.length} exam cadres (NTPC-UG, NTPC-Graduate, Group D, ALP)`);

const subjects = sandbox.window.RRB_SUBJECTS || [];
assert(subjects.length === 4, `Loaded 4 official exam subjects (Math, Reasoning, GA, Science)`);

const mathChapters = Object.keys(sandbox.window.RRB_MATH_TEXTBOOK_CHAPTERS || {});
assert(mathChapters.length >= 13, `Loaded ${mathChapters.length} math textbook chapters with subtopics`);

const allSubtopics = Object.keys(sandbox.window.RRB_ALL_TEXTBOOK_SUBTOPICS || {});
assert(allSubtopics.length >= 6, `Loaded ${allSubtopics.length} non-math subtopics chapters catalog`);

const pyqPapers = sandbox.window.RRB_PYQ_PAPERS || [];
assert(pyqPapers.length >= 15, `Loaded ${pyqPapers.length} official year-wise question papers`);
const papers2025 = pyqPapers.filter(p => p.examYear === '2025');
assert(papers2025.length >= 3, `Loaded ${papers2025.length} official 2025 question papers (NTPC, ALP, Tech)`);

const jobs = sandbox.window.RRB_LATEST_JOBS || [];
assert(jobs.length >= 5, `Loaded ${jobs.length} latest railway job postings`);
const openJobs = jobs.filter(j => j.statusCode === 'open');
assert(openJobs.length >= 4, `${openJobs.length} railway job postings currently active/open for applications`);

const notifs = sandbox.window.RRB_NOTIFICATIONS || [];
assert(notifs.length >= 6, `Loaded ${notifs.length} verified 2026-2027 official notifications`);

// 5. Test API Routes
console.log('\n[Suite 5: Serverless API Handler Verification]');
const liveNotifHandler = require(path.join(ROOT, 'api/live-notifications.js'));
assert(typeof liveNotifHandler === 'function', 'api/live-notifications exports a valid request handler function');

const notifHandler = require(path.join(ROOT, 'api/notifications.js'));
assert(typeof notifHandler === 'function', 'api/notifications exports a valid request handler function');

const sendOtpHandler = require(path.join(ROOT, 'api/send-otp.js'));
assert(typeof sendOtpHandler === 'function', 'api/send-otp exports a valid request handler function');

const verifyOtpHandler = require(path.join(ROOT, 'api/verify-otp.js'));
assert(typeof verifyOtpHandler === 'function', 'api/verify-otp exports a valid request handler function');

// 6. Test Responsive Layout & Print Styling
console.log('\n[Suite 6: CSS & Responsive Styling]');
const css = fs.readFileSync(path.join(ROOT, 'styles.css'), 'utf8');
assert(css.includes('@media (max-width: 820px)') && css.includes('@media (max-width: 640px)'), 'Mobile & tablet responsive breakpoints (820px, 640px) defined in styles.css');
assert(css.includes('@media print'), 'Print styling defined for 1-click PYQ PDF generation');

console.log('================================================================');
console.log(`Results: ${passes} Passed, ${failures} Failed`);
console.log('================================================================');

if (failures > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL TESTS PASSED!\n');
  process.exit(0);
}
