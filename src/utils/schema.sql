CREATE TABLE produtos (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  descricao TEXT,
  quantidade INTEGER NOT NULL
);

CREATE TABLE categorias (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL
);

CREATE TABLE inventario (
  id INTEGER PRIMARY KEY,
  produto_id INTEGER NOT NULL,
  categoria_id INTEGER NOT NULL,
  quantidade INTEGER NOT NULL,
  FOREIGN KEY (produto_id) REFERENCES produtos (id),
  FOREIGN KEY (categoria_id) REFERENCES categorias (id)
);