import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

export async function POST(request: Request): Promise<NextResponse> {
  /*
    * Funcion que se encarga de manejar las peticiones POST
    @ Param request: NextRequest - Peticion que se recibe del cliente
  */

  try {
    const body = await request.json()
    console.log(JSON.stringify(body))

    const response = await apiClient.post('/users', body)

    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
