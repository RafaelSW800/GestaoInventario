import db from '../utils/db';
export { db };

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
}

interface Categoria {
  id: number;
  nome: string;
}

interface Inventario {
  id: number;
  produto_id: number;
  categoria_id: number;
  quantidade: number;
}

const getProdutos = async () => {
  const produtos = db.all('SELECT * FROM produtos');
  return produtos;
};

const getCategorias = async () => {
  const categorias = db.all('SELECT * FROM categorias');
  return categorias;
};

const getInventario = async () => {
  const inventario = db.all('SELECT * FROM inventario');
  return inventario;
};

const adicionarProduto = async (produto: Produto) => {
  db.run('INSERT INTO produtos (nome, descricao, quantidade) VALUES (?, ?, ?)', [
    produto.nome,
    produto.descricao,
    produto.quantidade,
  ]);
};

const adicionarCategoria = async (categoria: Categoria) => {
  db.run('INSERT INTO categorias (nome) VALUES (?)', [categoria.nome]);
};

const adicionarInventario = async (inventario: Inventario) => {
  db.run('INSERT INTO inventario (produto_id, categoria_id, quantidade) VALUES (?, ?, ?)', [
    inventario.produto_id,
    inventario.categoria_id,
    inventario.quantidade,
  ]);
};

const atualizarProduto = async (produto: Produto) => {
  db.run('UPDATE produtos SET nome = ?, descricao = ?, quantidade = ? WHERE id = ?', [
    produto.nome,
    produto.descricao,
    produto.quantidade,
    produto.id,
  ]);
};

const atualizarCategoria = async (categoria: Categoria) => {
  db.run('UPDATE categorias SET nome = ? WHERE id = ?', [categoria.nome, categoria.id]);
};

const atualizarInventario = async (inventario: Inventario) => {
  db.run('UPDATE inventario SET produto_id = ?, categoria_id = ?, quantidade = ? WHERE id = ?', [
    inventario.produto_id,
    inventario.categoria_id,
    inventario.quantidade,
    inventario.id,
  ]);
};

const excluirProduto = async (id: number) => {
  db.run('DELETE FROM produtos WHERE id = ?', [id]);
};

const excluirCategoria = async (id: number) => {
  db.run('DELETE FROM categorias WHERE id = ?', [id]);
};

const excluirInventario = async (id: number) => {
  db.run('DELETE FROM inventario WHERE id = ?', [id]);
};

export {
  getProdutos,
  getCategorias,
  getInventario,
  adicionarProduto,
  adicionarCategoria,
  adicionarInventario,
  atualizarProduto,
  atualizarCategoria,
  atualizarInventario,
  excluirProduto,
  excluirCategoria,
  excluirInventario,
};