import Link from "next/link";
import { cookies } from 'next/headers';

type Conta = {
    autorizado: boolean;
    usuario: string;
};

export default async function Menu() {
    let conta: Conta = {
        autorizado: false,
        usuario: '',
    };    
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    const response = await fetch('https://api.origamid.online/conta/perfil', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        conta = (await response.json()) as Conta;
      }
     
    return (
        <>
            <ul className="menu">
                {conta.autorizado && conta.usuario ? (
                    <>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/imc">IMC</Link></li>
                        <li><Link href="/products">Products Server</Link></li>
                        <li><Link href="/client">Products Client</Link></li>
                        <li><Link href="/products/add">Add Product</Link></li>
                        <li><Link href="/courses">Courses</Link></li>
                        <li><Link href="/cookies">Cookies</Link></li>
                        <li><Link href="/actions">Actions</Link></li>
                        <li>{conta.usuario}</li>
                    </>
                ) : (
                    <li><Link href="/login">Login</Link></li>
                )}
            </ul>
        </>
    )
}