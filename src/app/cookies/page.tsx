'use client';

import { setCookie } from "@/actions/set-cookie";

export default async function Cookies() {

    const handleClick = () => {
        setCookie("secret", "12345678");
    }
  
    return (
        <main>
        <h1>Cookies</h1>
        <button onClick={handleClick}>Set Cookie</button>
        </main>
    );
}
