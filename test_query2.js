const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');
try {
  const rows = db.prepare('SELECT * FROM mapeo_lecciones').all();
  console.log("SUCCESS MAPEO! Rows:", rows.length);
} catch (e) {
  console.log("ERROR QUERYING MAPEO:", e.message);
}
db.close();
