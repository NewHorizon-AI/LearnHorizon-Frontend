/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NextResponse, type NextRequest } from 'next/server'
import apiClient from '@/lib/axios/apiClient'

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

   */

  console.log('AHGAUSGHKJASHGKJASDHGKHGJKASDFDHGSGGGGGG')
  // console.log('request', request)

  // const url = request.nextUrl

  // const articleId = url.searchParams.get('articleId')

  const articleId = params.id

  if (articleId == null) {
    return new NextResponse('No article ID provided', { status: 400 })
  }

  try {
    const response = await apiClient.get(`/articles/details/${articleId}`)

    // console.log('response', response)

    const article: IArticleComposite = response.data

    // console.log('article', article)

    return new NextResponse(JSON.stringify(article))
  } catch (error: any) {
    return new NextResponse(error)
  }
}
