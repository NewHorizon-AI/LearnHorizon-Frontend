import { NextResponse, type NextRequest } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

export async function POST(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams

  // Leer parámetros de la query
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '10'
  const sort = searchParams.get('sort') ?? 'createdAt'

  // Leer el cuerpo de la solicitud
  const filters = await req.json()

  try {
    // Construcción correcta de la URL
    const query = new URLSearchParams({
      page,
      limit,
      sort
    }).toString()

    // Enviar datos procesados con Axios
    const response = await apiClient.post(
      `articles/v2/search?${query}`,
      JSON.stringify(filters), // Convertir filtros a string
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const data = response.data

    return NextResponse.json(data, { status: 200 })
  } catch (error: any) {
    console.error('Error al procesar la solicitud:', error.message)

    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    )
  }
}
