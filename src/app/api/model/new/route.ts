import axios from 'axios'
import type { NextApiRequest } from 'next'

export const POST = async (req: NextApiRequest): Promise<Response> => {
  try {
    console.log(req)

    const response = await axios.post(
      'http://localhost:3001/publications',
      req.body
    )

    return new Response(JSON.stringify(response.data), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 })
  }
}
