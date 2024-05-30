import axios from 'axios'
import { type ICategory } from '@/interfaces/IBackend'

export const GET = async (_req: Request): Promise<Response> => {
  try {
    const { data } = await axios.get<ICategory>(
      `http://localhost:3001/categories`
    )

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    })
  }
}
