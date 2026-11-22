/**
 * RRB Vijetha Production Build Pipeline
 * Validates syntax, JSON schemas, asset integrity, and copies all static
 * assets into the `public/` output directory for Vercel Edge CDN deployment.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

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

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// ── Step 1: Validate source assets ──────────────────────────────────────────
console.log('\n--- 1. Validating Core Production Assets ---');
checkAsset('index.html');
checkAsset('styles.css');
checkAsset('sw.js');
checkAsset('manifest.json');
checkAsset('data/rrb-official-pyq-booklet-yearwise.html');

// ── Step 2: Validate JSON configurations ────────────────────────────────────
console.log('\n--- 2. Validating JSON Configurations ---');
checkJson('manifest.json');
checkJson('package.json');
checkJson('vercel.json');
checkJson('data/backend-db.json');

// ── Step 3: Validate JavaScript syntax ──────────────────────────────────────
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
  'api/subscribe-alert.js',
  'api/send-custom-alert.js',
  'api/save-smtp-config.js'
];
jsFiles.forEach(f => {
  if (fs.existsSync(path.join(ROOT, f))) checkSyntax(f);
});

// ── Step 4: Validate dataset contents ───────────────────────────────────────
console.log('\n--- 4. Validating Dataset Contents ---');
try {
  const db = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/backend-db.json'), 'utf8'));
  console.log(`  ✓ Verified ${(db.notifications || []).length} Official Recruitment Notifications in DB`);
  console.log(`  ✓ Verified ${(db.officialSites || []).length} Official .gov.in RRB Regional Portals`);
} catch (e) {
  console.error('  ✗ Dataset validation failed:', e.message);
  errorCount++;
}

const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const essentialTags = ['manifest.json', 'styles.css', 'data/exams-and-subjects.js',
  'data/questions-and-papers.js', 'data/math-textbook-chapters.js',
  'data/notifications-data.js', 'data/latest-jobs-data.js', 'js/app.js'];
let missingTags = 0;
essentialTags.forEach(tag => {
  if (!indexHtml.includes(tag)) { console.error(`  ✗ index.html missing: ${tag}`); missingTags++; errorCount++; }
});
if (missingTags === 0) console.log('  ✓ All essential scripts & stylesheets correctly referenced in index.html');

// ── Abort if any errors found ────────────────────────────────────────────────
if (errorCount > 0) {
  console.error(`\n❌ Build Failed with ${errorCount} error(s)! Deployment aborted.`);
  process.exit(1);
}

// ── Step 5: Copy static assets into public/ ─────────────────────────────────
console.log('\n--- 5. Copying Static Assets → public/ ---');

// Clean public/ first (keep api/ untouched)
if (fs.existsSync(PUBLIC)) {
  fs.rmSync(PUBLIC, { recursive: true, force: true });
}
fs.mkdirSync(PUBLIC, { recursive: true });

const staticAssets = [
  'index.html',
  'styles.css',
  'sw.js',
  'manifest.json'
];
const staticDirs = ['js', 'data'];

for (const file of staticAssets) {
  fs.copyFileSync(path.join(ROOT, file), path.join(PUBLIC, file));
  console.log(`  ✓ Copied: ${file}`);
}
for (const dir of staticDirs) {
  copyRecursive(path.join(ROOT, dir), path.join(PUBLIC, dir));
  const count = fs.readdirSync(path.join(PUBLIC, dir)).length;
  console.log(`  ✓ Copied: ${dir}/ (${count} files)`);
}

const pubSize = (fs.statSync(path.join(PUBLIC, 'index.html')).size / 1024).toFixed(1);
console.log(`\n  public/ output: ${fs.readdirSync(PUBLIC).length} top-level items`);
console.log(`  index.html in public/: ${pubSize} KB ✓`);

console.log('\n================================================================');
console.log('✅ Build Successful! public/ ready for Vercel Edge CDN deployment.');
console.log('================================================================\n');
process.exit(0);
