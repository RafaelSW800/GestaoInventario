import React, { useState, useEffect } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '', description: '', image: '' });
    const [filter, setFilter] = useState({ name: '', supplier: '' });
    const [sortOrder, setSortOrder] = useState('asc');
    const [error, setError] = useState('');

    useEffect(() => {
        // Aqui você pode buscar produtos de uma API ou de um banco de dados
    }, []);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleImageChange = (e: { target: { files: any[]; }; }) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setNewProduct({ ...newProduct, image: imageUrl });
        }
    };

    const addProduct = () => {
        const price = parseFloat(newProduct.price);
        const quantity = parseInt(newProduct.quantity, 10);

        // Validações
        if (!newProduct.name || price <= 0 || quantity <= 0 || !newProduct.image) {
            setError('Por favor, preencha todos os campos corretamente.');
            return;
        }

        setError(''); // Limpa o erro se as validações passarem

        // Adiciona o novo produto
        setProducts([...products, { ...newProduct, id: products.length + 1, price, quantity }]);
        setNewProduct({ name: '', price: '', quantity: '', description: '', image: '' });
    };

    const editProduct = (id: any) => {
        // Lógica para editar um produto existente
    };

    const deleteProduct = (id: any) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const filteredProducts = products
        .filter(product => product.name.includes(filter.name))
        .filter(product => product.supplier.includes(filter.supplier))
        .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

    return (
        <div>
            <h1>Cadastro de Produtos</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type="text" name="name" placeholder="Nome" value={newProduct.name} onChange={handleInputChange} />
            <input type="number" name="price" placeholder="Preço" value={newProduct.price} onChange={handleInputChange} />
            <input type="number" name="quantity" placeholder="Quantidade" value={newProduct.quantity} onChange={handleInputChange} />
            <textarea name="description" placeholder="Descrição" value={newProduct.description} onChange={handleInputChange}></textarea>
            <input type="file" onChange={handleImageChange} />
            <button onClick={addProduct}>Adicionar Produto</button>

            <h2>Listagem de Produtos</h2>
            <input type="text" placeholder="Filtrar por nome" onChange={(e) => setFilter({ ...filter, name: e.target.value })} />
            <input type="text" placeholder="Filtrar por fornecedor" onChange={(e) => setFilter({ ...filter, supplier: e.target.value })} />
            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Preço Crescente</option>
                <option value="desc">Preço Decrescente</option>
            </select>

            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Preço: {product.price}</p>
                        <p>Quantidade: {product.quantity}</p>
                        <p>Descrição: {product.description}</p>
                        {product.image && <img src={product.image} alt={product.name} />}
                        <button onClick={() => editProduct(product.id)}>Editar</button>
                        <button onClick={() => deleteProduct(product.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;