/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NextResponse } from 'next/server'

import apiClient from '@/lib/apiClient/apiClient'
import axios from 'axios'

interface Params {
  articleId: string
}

export async function GET(
  req: Request,
  { params }: { params: Params }
): Promise<NextResponse> {
  const articleId = params.articleId

  if (articleId === '') {
    return new NextResponse('No article ID provided', { status: 400 })
  }

  try {
    const response = await apiClient.get(`/model/${articleId}`, {
      responseType: 'blob'
    })

    const blob = response.data

    // Crear y devolver respuesta con archivo GLTF
    const headers = new Headers()
    headers.set('Content-Type', 'application/octet-stream')
    headers.set('Content-Disposition', `attachment; filename=${articleId}.gltf`)

    return new NextResponse(blob, {
      status: 200,
      headers
    })
  } catch (error: unknown) {
    // Verificar si el error tiene una respuesta del servidor
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 500
      const statusText = error.response?.statusText ?? 'Error fetching model'

      return new NextResponse(statusText, { status })
    } else {
      // Si no hay respuesta del servidor, retornar 500
      return new NextResponse('Internal Server Error', { status: 500 })
    }
  }
}
