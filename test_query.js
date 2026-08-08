const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');
try {
  const rows = db.prepare('SELECT * FROM programas').all();
  console.log("SUCCESS! Rows:", rows);
} catch (e) {
  console.log("ERROR QUERYING PROGRAMAS:", e.message);
}
db.close();
