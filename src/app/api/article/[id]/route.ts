import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

import { type IArticleComposite } from '@/interfaces/article/article.interface'

interface Params {
  id: string
}

export async function GET(
  req: Request,
  { params }: { params: Params }
): Promise<NextResponse> {
  /*
   * Funcion que se encarga de obtener un articulo de la base de datos
   * @param {Request} req - Request de la petición
   * @param {Params} params - Parámetros de la petición

    TODO: Mejorar la recepcion de parametros por la URL para evitar errores de tipo en tiempo de ejecución 


      export async function GET(
      request: Request,
      { params }: { params: { slug: string } }
    ) {
      const slug = params.slug // 'a', 'b', or 'c'
    }
    }
   */

  const articleId = params.id

  if (articleId == null) {
    return new NextResponse('No article ID provided', { status: 400 })
  }

  try {
    const response = await apiClient.get(`/articles/details/${articleId}`)

    const article: IArticleComposite = response.data

    return new NextResponse(JSON.stringify(article))
  } catch (error: any) {
    return new NextResponse('Error fetching article', { status: 500 })
  }
}
