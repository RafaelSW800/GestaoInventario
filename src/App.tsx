import React from 'react';
import { getProdutos, getCategorias, getInventario } from './components/Inventario';

const App = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [categorias, setCategorias] = React.useState([]);
  const [inventario, setInventario] = React.useState([]);

  React.useEffect(() => {
    getProdutos().then(setProdutos);
    getCategorias().then(setCategorias);
    getInventario().then(setInventario);
  }, []);

  return (
    <div>
      <h1>Inventário</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>{categoria.nome}</li>
        ))}
      </ul>
      <ul>
        {inventario.map((item) => (
          <li key={item.id}>
            {item.produto_id} - {item.categoria_id} - {item.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;