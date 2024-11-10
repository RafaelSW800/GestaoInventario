import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./inventory.db');

export default db;