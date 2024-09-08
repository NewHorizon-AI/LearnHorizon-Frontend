/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { NextResponse, type NextRequest } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Usamos formData para obtener el archivo y el id del body de la solicitud
    const formData = await request.formData()
    const file = formData.get('file') as File
    const articleId = formData.get('id') as string

    if (!file || !articleId) {
      return NextResponse.json(
        { message: 'Faltan archivo o articleId' },
        { status: 400 }
      )
    }

    // Creamos un nuevo FormData para reenviar el archivo y el id al backend de NestJS
    const nestFormData = new FormData()
    nestFormData.append('file', file)
    nestFormData.append('id', articleId)

    const response = await apiClient.post('/upload/model', nestFormData)
    // Si el backend de NestJS responde con error, devolvemos el error
    if (!response.ok) {
      const errorMessage = `Error en el backend: ${response.status} ${response.statusText}`
      console.error(errorMessage)
      return NextResponse.json(
        { message: errorMessage },
        { status: response.status }
      )
    }

    const responseData = await response.json()
    return NextResponse.json(responseData)
  } catch (error: any) {
    console.error('Error en POST:', error.message)
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
