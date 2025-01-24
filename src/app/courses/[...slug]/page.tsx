import Link from 'next/link';

type PageParams = {
    params: {
        slug: string[]
    }
}

type Course = {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    total_aulas: number;
    total_horas: number;
    aulas: Aula[];
}

type Aula = {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    curso_id: number;
    tempo: number;
    ordem: number;
};

export default async function CoursesPage({params}: PageParams) {
    const response = await fetch(`https://api.origamid.online/cursos/${params.slug}`);
    const data = (await response.json()) as Course;

    return <>
        <h1>Courses Page</h1>
        <Link href="/products">return to courses page</Link>
        {data && data.id ? (
            <div className="product-card">
                <h2>{data.nome}</h2>
                <p>Description: {data.descricao}</p>
                <p>Total Classes: {data.total_aulas}</p>
                <p>Total Hour: {data.total_horas}</p>
                <h3>Classes:</h3>
                <ul>
                    {data.aulas.map((aula) => (
                        <li key={aula.id}>
                            <h4>{aula.ordem}. {aula.nome}</h4>
                            <p>{aula.descricao}</p>
                            <p>Duraction: {aula.tempo} minutos</p>
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <p>Course not found for this slug</p>
        )}
    </>
}