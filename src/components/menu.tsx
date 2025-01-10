import Link from "next/link";

export default function Menu() {
    return (
        <>
            <ul className="menu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/imc">IMC</Link></li>
                <li><Link href="/products">Products Server</Link></li>
                <li><Link href="/client">Products Client</Link></li>
                <li><Link href="/courses">Courses</Link></li>
            </ul>
        </>
    )
}