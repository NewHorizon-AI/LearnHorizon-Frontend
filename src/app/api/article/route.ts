/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type NextRequest } from 'next/server'
import axios from 'axios'
import { type IArticleCard } from '@/interfaces/IBackend'

export const GET = async (req: NextRequest): Promise<Response> => {
  try {
    const { searchParams } = new URL(req.url || '')
    const page = searchParams.get('page')
    const pageSize = searchParams.get('pageSize')
    const order = searchParams.get('order')

    const { data } = await axios.get<IArticleCard[]>(
      `http://localhost:3001/publications/search?page=${page}&pageSize=${pageSize}&order=${order}`
    )

    console.log(page, pageSize, order)

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    })
  }
}
