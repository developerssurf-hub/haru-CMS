const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');
try {
  db.prepare('DELETE FROM strapi_database_schema').run();
  console.log("SUCCESS! Metadatos de esquema reseteados. Strapi reconstruirá la base de datos.");
} catch (e) {
  console.log("ERROR DROPPING SCHEMA METADATA:", e.message);
}
db.close();
