import React, { useState } from 'react';
import db from '../utils/db';
export { db };

const AdicionarProduto = () => {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState(0);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await db.run('INSERT INTO produtos (nome, quantidade) VALUES (?, ?)', [nome, quantidade]);
  setNome('');
  setQuantidade(0);
};

  return (
    <div>
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Quantidade:
          <input type="number" value={quantidade} onChange={(e) => setQuantidade(parseInt(e.target.value))} />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AdicionarProduto;