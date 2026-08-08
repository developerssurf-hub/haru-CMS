const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');
try {
  db.exec(`
    CREATE TABLE IF NOT EXISTS programas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      document_id VARCHAR(255),
      nombre VARCHAR(255),
      folder VARCHAR(255),
      created_at DATETIME,
      updated_at DATETIME,
      published_at DATETIME,
      created_by_id INTEGER,
      updated_by_id INTEGER,
      locale VARCHAR(255)
    );
  `);
  console.log("SUCCESS! Tabla 'programas' creada a la fuerza por SQLite.");
} catch (e) {
  console.log("ERROR CREANDO TABLA:", e.message);
}
db.close();
