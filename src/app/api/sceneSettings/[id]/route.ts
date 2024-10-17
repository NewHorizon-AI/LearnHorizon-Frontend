import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

import { type IArticle } from '@/interfaces/article/article.interface'

interface Params {
  id: string
}

export async function GET(
  req: Request,
  { params }: { params: Params }
): Promise<NextResponse> {
  const sceneSettingsId = params.id

  try {
    const response = await apiClient.get(`/articles/v2/${sceneSettingsId}`)

    const article: IArticle = response.data

    return new NextResponse(JSON.stringify(article))
  } catch (error: any) {
    return new NextResponse('Error fetching article', { status: 500 })
  }
}
