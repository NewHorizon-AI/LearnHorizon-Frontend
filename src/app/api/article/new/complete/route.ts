import { NextResponse, type NextRequest } from 'next/server'

import apiClient from '@/lib/axios/apiClient'

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json()

    console.log('Request body:', body)

    const response = await apiClient.post('/publications', body)

    console.log('Response from backend:', response.data)

    return NextResponse.json(response.data, { status: 200 })
  } catch (error: any) {
    console.error(error)

    const errorMessage =
      error?.response?.data?.message ?? error?.message ?? 'An error occurred'

    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
