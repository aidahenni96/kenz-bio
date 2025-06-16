const Database = require('better-sqlite3');
const db = new Database('./kenz-bio.sqlite');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const products = db.prepare('SELECT * FROM products').all();
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    const { name, description, price, stock } = req.body;
    if (!name || !price) {
      res.status(400).json({ error: 'Le nom et le prix sont obligatoires.' });
      return;
    }
    const stmt = db.prepare('INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)');
    const info = stmt.run(name, description || '', price, stock || 0);
    res.status(201).json({ id: info.lastInsertRowid });
  } else {
    res.status(405).end(); // Méthode non autorisée
  }
}
