/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import axios from 'axios'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log('Request body:', body)

    const response = await axios.post(
      'http://localhost:3001/publications',
      body
    )

    console.log('Response from backend:', response.data)

    return NextResponse.json(response.data, { status: 200 })
  } catch (error: any) {
    console.error(
      'Error:',
      error.response ? error.response.data : error.message
    )

    return NextResponse.json(
      {
        message: 'Internal Server Error',
        error: error.response ? error.response.data : error.message
      },
      { status: 500 }
    )
  }
}
