import Database from 'better-sqlite3';

const db = new Database('./kenz-bio.sqlite');

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    stock INTEGER DEFAULT 0
  )
`);

console.log('Tables créées pour kenz-bio !');
