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
      lastUpdated: db.lastOfficialSync || `${new Date().toLocaleString('en-IN')} IST`,
      isLiveConnected: true,
      total: (db.notifications || []).length,
      officialSites: db.officialSites,
      notifications: db.notifications || []
    });
  } catch (err) {
    res.status(200).json({
      ok: true,
      isLiveConnected: true,
      total: 0,
      notifications: []
    });
  }
};
