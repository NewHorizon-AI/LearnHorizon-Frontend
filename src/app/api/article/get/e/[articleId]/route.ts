import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

import { type IArticleComposite } from '@/interfaces/article/article.interface'

interface Params {
  articleId: string
}

export async function GET(
  req: Request,
  { params }: { params: Params }
): Promise<NextResponse> {
  /*
   * Funcion que se encarga de obtener un articulo de la base de datos
   * @param {Request} req - Request de la petición
   * @param {Params} params - Parámetros de la petición
   */

  const articleId = params.articleId

  if (articleId == null) {
    return new NextResponse('No article ID provided', { status: 400 })
  }

  try {
    const response = await apiClient.get(`/articles/e/${articleId}`)

    const article: IArticleComposite = response.data

    return new NextResponse(JSON.stringify(article))
  } catch (error: any) {
    return new NextResponse('Error fetching article', { status: 500 })
  }
}
