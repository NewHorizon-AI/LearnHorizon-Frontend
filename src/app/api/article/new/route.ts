import { NextResponse, type NextRequest } from 'next/server'

import apiClient from '@/lib/axios/apiClient'

export async function POST(request: NextRequest): Promise<NextResponse> {
  console.log('asd')
  try {
    const body = await request.json()

    console.log('Request body:', body)

    const response = await apiClient.post('/articles', body)

    console.log('Response from backend:', response.data)

    return NextResponse.json(response.data, { status: 200 })
  } catch (error: any) {
    console.error(error.message)

    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
