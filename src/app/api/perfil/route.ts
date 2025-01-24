import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  const response = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token?.value,
    },
  });
  const data = await response.json();

  return Response.json(data);
}

export async function POST(request: NextRequest) {
  const param = request.nextUrl.searchParams.get('busca');
  const body = request.json();
  
  return Response.json({ param });
}