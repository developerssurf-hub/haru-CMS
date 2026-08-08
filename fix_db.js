const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');

console.log("🛠️  Iniciando reparación de la base de datos de Strapi...");

try {
  db.prepare('ALTER TABLE programas ADD COLUMN published_at DATETIME').run();
  console.log('✅ Columna published_at agregada a la tabla programas.');
} catch(e) { 
  console.log('⚠️  Nota (programas):', e.message); 
}

try {
  db.prepare('ALTER TABLE mapeo_lecciones ADD COLUMN published_at DATETIME').run();
  console.log('✅ Columna published_at agregada a la tabla mapeo_lecciones.');
} catch(e) { 
  console.log('⚠️  Nota (mapeo_lecciones):', e.message); 
}

db.close();
console.log("✨ Reparación completada con éxito. Ya puedes iniciar Strapi.");
