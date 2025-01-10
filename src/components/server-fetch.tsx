type Product = {
    id: number;
    nome: String;
    preco: number;
    descricao: String;
    estoque: number;
    importado: number;
}

export default async function ServerFetch() {
    const response = await fetch("https://api.origamid.online/produtos");
    const data = await response.json() as Product[];
    return <>
        <div className="flex product-container">
           {data.map((product) => (
                <div key={product.id} className="product-card">
                    <p>Name: {product.nome}</p>
                    <p>Description: {product.descricao}</p>
                    <p>Price: {product.preco}</p>
                    <p>Stock: {product.estoque}</p>
                    <p>Imported: {product.importado == 1 ? 'true': 'false'}</p>
                </div>
            ))}
        </div>
    </>
}