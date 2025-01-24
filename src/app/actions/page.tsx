import Update from "@/components/update";

type Acao = {
    nome: string;
    atualizada: string;
    preco: number;
}

export default async function ActionsPages() {
  const response = await fetch('https://api.origamid.online/acoes/lua', {
    next: {
      revalidate: 5
    }
  });

  const action = await response.json() as Acao;

  return (
   <>
    <h2>Actions</h2>
    <Update />
    <h3>{action.nome}</h3>
    <p>Price: {action.preco}</p>
    <p>Updated: {action.atualizada}</p>
   </>
  );
}
