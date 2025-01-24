import Link from "next/link";

export type Product = {
    id?: string;
    nome: string;
    preco: number;
    descricao: string;
    estoque: number;
    importado: 0 | 1;
  };
  

export default async function ServerFetch() {
    const response = await fetch("https://api.origamid.online/produtos", {
        next: {
            revalidate: 5,
        },
    });
    const data = await response.json() as Product[];
    return <>
        <div className="flex product-container">
           {data.map((product) => (
                <Link 
                href={`products/${product.id}`} 
                key={product.id} 
                className="product-card">
                    <p>Name: {product.nome}</p>
                    <p>Description: {product.descricao}</p>
                    <p>Price: {product.preco}</p>
                    <p>Stock: {product.estoque}</p>
                    <p>Imported: {product.importado == 1 ? 'true': 'false'}</p>
                </Link>
            ))}
        </div>
    </>
}