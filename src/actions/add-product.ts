'use server';

//import { Product } from '@/app/products/page';
import { Product } from '@/components/server-fetch';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const validateName = (nome: string) => {
  return typeof nome === 'string' && nome.length > 1;
}

const validatePrice = (preco: unknown) => {
  return typeof preco === 'number' && preco > 1;
}

export async function addProduct(
  state: { errors: string[] },
  formData: FormData,) {

  const product: Product = {
    nome: formData.get('nome') as string,
    preco: Number(formData.get('preco')) as number,
    descricao: formData.get('descricao') as string,
    estoque: Number(formData.get('estoque')) as number,
    importado: formData.get('importado') ? 1 : 0
  };

  let errors = [];
  if (!validateName(product.nome)) errors.push('invalid name');
  if (!validatePrice(product.preco)) errors.push('invalid price');
  if (errors.length > 0) return {errors};

  try {
    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Erro ao adicionar o produto.');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: [error.message],
      };
    }
  }
  revalidatePath('/products');
  redirect('/products');
  //return {errors: []};
}
