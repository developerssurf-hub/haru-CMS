const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');
try {
  const info = db.pragma('table_info(programas)');
  console.log("SCHEMA OF PROGRAMAS:");
  console.table(info);
} catch (e) {
  console.log("ERROR QUERYING PROGRAMAS:", e.message);
}
db.close();
