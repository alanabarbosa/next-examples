import Link from 'next/link';

type PageParams = {
    params: {
        id: string
    }
}

type Product = {
    id: number;
    nome: String;
    preco: number;
    descricao: String;
    estoque: number;
    importado: number;
}

export default async function ProductsPage({params}: PageParams) {
    const response = await fetch(`https://api.origamid.online/produtos/${params.id}`);
    const data = (await response.json()) as Product;

    return <>
        <h1>Products Page</h1>
        {data && data.id ? (
            <div className="product-card">
                <p>Name: {data.nome}</p>
                <p>Description: {data.descricao}</p>
                <p>Price: {data.preco}</p>
                <p>Stock: {data.estoque}</p>
                <p>Imported: {data.importado == 1 ? 'true': 'false'}</p>
            </div>
        ) : (
            <p>Product not found for this id</p>
        )}
        <Link href="/products">return to products page</Link>
    </>
}