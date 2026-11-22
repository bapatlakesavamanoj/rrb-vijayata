const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const dbPath = path.join(process.cwd(), 'data', 'backend-db.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({
      ok: true,
      lastOfficialSync: db.lastOfficialSync,
      officialSites: db.officialSites,
      notifications: db.notifications,
      emailDispatchLogs: db.emailDispatchLogs || []
    });
  } catch (err) {
    res.status(200).json({ ok: false, error: err.message });
  }
};
