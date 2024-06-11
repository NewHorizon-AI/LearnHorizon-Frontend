import axios from 'axios'
import { type IArticle } from '@/interfaces/IArticle'

export const GET = async (
  req: any,
  { params }: { params: any }
): Promise<Response> => {
  try {
    const { id } = params
    const { data } = await axios.get<IArticle>(
      `http://localhost:3001/publications/article/${id}`
    )
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    })
  }
}
