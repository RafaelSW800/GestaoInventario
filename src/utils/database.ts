import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('inventory.db');

// Criar a tabela de inventário
db.run(`
  CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    quantity INTEGER,
    description TEXT
  )
`);

export default db;