import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

interface Params {
  id: string
}

export async function DELETE(
  req: Request,
  { params }: { params: Params }
): Promise<NextResponse> {
  const articleId = params.id

  if (articleId == null) {
    return new NextResponse('No article ID provided', { status: 400 })
  }

  try {
    await apiClient.delete(`/articles/v2/${articleId}`)
    return new NextResponse('Article deleted successfully', { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error deleting article', { status: 500 })
  }
}
