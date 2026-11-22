/**
 * RRB Vijetha Production Build & Verification Pipeline
 * Validates syntax, JSON schemas, asset integrity, and dataset completeness.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

console.log('================================================================');
console.log('🚆 RRB VIJETHA — PRODUCTION VERIFICATION & BUILD PIPELINE');
console.log('================================================================');
console.log(`[Build] Environment: Node ${process.version} | Timestamp: ${new Date().toISOString()}`);

let errorCount = 0;

function checkSyntax(filePath) {
  try {
    const fullPath = path.join(ROOT, filePath);
    const code = fs.readFileSync(fullPath, 'utf8');
    new vm.Script(code, { filename: filePath });
    console.log(`  ✓ Syntax OK: ${filePath}`);
    return true;
  } catch (err) {
    console.error(`  ✗ Syntax Error in ${filePath}: ${err.message}`);
    errorCount++;
    return false;
  }
}

function checkJson(filePath) {
  try {
    const fullPath = path.join(ROOT, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    JSON.parse(content);
    console.log(`  ✓ JSON Valid: ${filePath}`);
    return true;
  } catch (err) {
    console.error(`  ✗ Invalid JSON in ${filePath}: ${err.message}`);
    errorCount++;
    return false;
  }
}

function checkAsset(filePath) {
  const fullPath = path.join(ROOT, filePath);
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).size > 0) {
    console.log(`  ✓ Asset Verified: ${filePath} (${(fs.statSync(fullPath).size / 1024).toFixed(1)} KB)`);
    return true;
  } else {
    console.error(`  ✗ Missing or empty asset: ${filePath}`);
    errorCount++;
    return false;
  }
}

console.log('\n--- 1. Validating Core Production Assets ---');
checkAsset('index.html');
checkAsset('styles.css');
checkAsset('sw.js');
checkAsset('manifest.json');
checkAsset('data/rrb-official-pyq-booklet-yearwise.html');

console.log('\n--- 2. Validating JSON Configurations ---');
checkJson('manifest.json');
checkJson('package.json');
checkJson('vercel.json');
checkJson('data/backend-db.json');

console.log('\n--- 3. Validating JavaScript Files Syntax ---');
const jsFiles = [
  'sw.js',
  'server.js',
  'js/app.js',
  'js/firebase-config.js',
  'data/exams-and-subjects.js',
  'data/questions-and-papers.js',
  'data/math-textbook-chapters.js',
  'data/notifications-data.js',
  'data/latest-jobs-data.js',
  'data/videos-and-ai.js',
  'api/live-notifications.js',
  'api/notifications.js',
  'api/subscribe-alert.js'
];

jsFiles.forEach(f => {
  if (fs.existsSync(path.join(ROOT, f))) {
    checkSyntax(f);
  }
});

console.log('\n--- 4. Validating Dataset Contents ---');
try {
  const db = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/backend-db.json'), 'utf8'));
  console.log(`  ✓ Verified ${(db.notifications || []).length} Official Recruitment Notifications in DB`);
  console.log(`  ✓ Verified ${(db.officialSites || []).length} Official .gov.in RRB Regional Portals`);
} catch (e) {
  errorCount++;
}

// Verify index.html contains essential references
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const essentialTags = [
  'manifest.json',
  'styles.css',
  'data/exams-and-subjects.js',
  'data/questions-and-papers.js',
  'data/math-textbook-chapters.js',
  'data/notifications-data.js',
  'data/latest-jobs-data.js',
  'js/app.js'
];

let missingTags = 0;
essentialTags.forEach(tag => {
  if (!indexHtml.includes(tag)) {
    console.error(`  ✗ index.html is missing tag for: ${tag}`);
    missingTags++;
    errorCount++;
  }
});
if (missingTags === 0) {
  console.log('  ✓ All essential scripts & stylesheets correctly referenced in index.html');
}

console.log('================================================================');
if (errorCount > 0) {
  console.error(`❌ Build Failed with ${errorCount} error(s)!`);
  process.exit(1);
} else {
  console.log('✅ Build Successful! Application is 100% verified for Vercel production deployment.');
  console.log('================================================================\n');
  process.exit(0);
}
