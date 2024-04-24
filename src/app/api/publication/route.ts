import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { type IPublicationCard } from '@/interface/IBackend'

export const GET = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Response> => {
  try {
    if (req.url != null) {
      const url = new URL(req.url)
      const page = url.searchParams.get('page')
      const pageSize = url.searchParams.get('pageSize')
      const order = url.searchParams.get('order')
      console.log(page, pageSize, order)

      const { data } = await axios.get<IPublicationCard[]>(
        `http://localhost:3001/publications/search?page=${page}&pageSize=${pageSize}&order=${order}`
      )

      return new Response(JSON.stringify(data), { status: 200 })
    } else {
      return new Response(JSON.stringify({ message: 'Invalid request' }), {
        status: 400
      })
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    })
  }
}