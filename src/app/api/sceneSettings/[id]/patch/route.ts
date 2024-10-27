import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

interface Params {
  id: string
}

export async function PATCH(
  request: Request,
  { params }: { params: Params }
): Promise<NextResponse> {
  try {
    const articleId = params.id

    if (articleId == null) {
      return new NextResponse('No article ID provided', { status: 400 })
    }

    const body = await request.json()

    const response = await apiClient.patch(`/scene-settings/${articleId}`, body)

    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
