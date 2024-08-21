/* eslint-disable @typescript-eslint/no-unsafe-argument */

import apiClient from '@/lib/apiClient/apiClient'

import { NextResponse } from 'next/server'

export async function GET(req: Request): Promise<NextResponse> {
  const id = req.url?.split('/').pop()

  const articleId = id

  try {
    const response = await apiClient.get(`/model/${articleId}`, {
      responseType: 'blob'
    })

    const blob = await response.data

    const headers = new Headers({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${articleId}.model"`
    })

    return new NextResponse(blob, { headers })
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
