/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NextResponse } from 'next/server'

import apiClient from '@/lib/apiClient/apiClient'

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
  } catch (error) {
    console.error('Error fetching model:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

// import { NextResponse } from 'next/server'
// import apiClient from '@/lib/apiClient/apiClient'

// interface Params {
//   articleId: string
// }

// export async function GET(
//   req: Request,
//   { params }: { params: Params }
// ): Promise<NextResponse> {
//   /*
//    * Función que se encarga de obtener un artículo de la base de datos
//    * y preparar un archivo GLTF para la respuesta.
//    * @param {Request} req - Request de la petición
//    * @param {Params} params - Parámetros de la petición
//    */

//   const articleId = params.articleId

//   if (articleId == null) {
//     return new NextResponse('No article ID provided', { status: 400 })
//   }

//   try {
//     const response = await apiClient.get(`/model/${articleId}`, {
//       responseType: 'blob'
//     })

//     // Verifica si hay datos en la respuesta
//     // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
//     if (!response?.data) {
//       return new NextResponse('Error fetching model: No data received', {
//         status: 404
//       })
//     }

//     // Crea un Blob con los datos obtenidos
//     const blob = new Blob([response.data], { type: 'model/gltf+json' })

//     // Crea los encabezados para la respuesta
//     const headers = new Headers()
//     headers.set('Content-Type', 'model/gltf+json')
//     headers.set('Content-Disposition', `attachment; filename=${articleId}.gltf`)

//     // Retorna la respuesta con el archivo GLTF en formato de stream
//     return new NextResponse(blob.stream(), {
//       status: 200,
//       headers
//     })
//   } catch (error) {
//     console.error('Error fetching model:', error)
//     return new NextResponse('Internal Server Error', { status: 500 })
//   }
// }
