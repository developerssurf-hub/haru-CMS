const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');
try {
  db.prepare('DROP TABLE IF EXISTS programas').run();
  console.log("SUCCESS! Tabla 'programas' eliminada.");
} catch (e) {
  console.log("ERROR DROPPING PROGRAMAS:", e.message);
}
db.close();
