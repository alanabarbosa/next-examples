import Link from "next/link";

type Course = {
    id: number;
    slug: String;
    nome: String;
    descricao: String;
    total_aulas: number;
    total_horas: number;
}

export default async function CourseFetch() {
    const response = await fetch("https://api.origamid.online/cursos");
    const data = await response.json() as Course[];

    console.log(data)

    return <>
        <div className="flex product-container">
           {data.map((course) => (
                <Link href={`courses/${course.slug}`} key={course.id} className="product-card">
                    <p>Name: {course.nome}</p>
                    <p>Description: {course.descricao}</p>
                    <p>Total classes: {course.total_aulas}</p>
                    <p>Total hours: {course.total_horas}</p>                   
                </Link>
            ))}
        </div>
    </>
}