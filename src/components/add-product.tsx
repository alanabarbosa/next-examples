'use client';

import { addProduct } from '@/actions/add-product';
import { useFormState, useFormStatus } from 'react-dom';
//import { Product } from '@/app/products/page';
//import { Product } from '@/components/server-fetch';

const Button = () => {
  const status = useFormStatus();
  return <button type='submit' 
    disabled={status.pending}>
      {status.pending ? 'Adding...' : 'Add'}
    </button>
}

export default function AddProduct() {
  /*async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: Product = {
      nome: event.currentTarget.nome.value,
      descricao: event.currentTarget.descricao.value,
      preco: Number(event.currentTarget.preco.value),
      estoque: Number(event.currentTarget.estoque.value),
      importado: event.currentTarget.importado.checked ? 1 : 0,
    };
    await addProduct(data);
  }*/
  
  const [state, formAction] = useFormState(addProduct as any, {
    errors: [],
  });

  console.log(state);

  return (
    <form action={formAction}>
      <label htmlFor="nome">Name</label>
      <input type="text" id="nome" name="nome" />
      
      <label htmlFor="preco">Price</label>
      <input type="number" id="preco" name="preco" />
      
      <label htmlFor="descricao">Description</label>
      <input type="text" id="descricao" name="descricao" />
      
      <label htmlFor="estoque">Stock</label>
      <input type="number" id="estoque" name="estoque" />
      
      <label htmlFor="importado">
        <input type="checkbox" id="importado" name="importado" />
        Imported
      </label>

      {state.errors.map((error, i) => (
        <p style={{ color: 'red' }} key={i}>
          {error}
        </p>
      ))}

      <Button />
    </form>
  );
}
