const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');

try {
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%up_users%'").all();
  console.log("Tablas encontradas:", tables);
  
  // Create both potential names for Strapi v4/v5 just to be safe and avoid the 500
  db.exec(`
    CREATE TABLE IF NOT EXISTS up_users_programa_links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      programa_id INTEGER,
      user_order INTEGER,
      programa_order INTEGER
    );
  `);
  
  db.exec(`
    CREATE TABLE IF NOT EXISTS up_users_programas_lnk (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      programa_id INTEGER,
      user_order INTEGER,
      programa_order INTEGER
    );
  `);
  
  console.log("SUCCESS: Tablas de unión para usuarios y programas aseguradas.");
} catch (e) {
  console.error("ERROR:", e.message);
}
db.close();
