import axios from 'axios'
import { type IPublication } from '@/interface/IBackend'

export const GET = async (
  req: Request,
  { params }: { params: IPublication }
): Promise<Response> => {
  try {
    const { data } = await axios.get(`http://localhost:3001/publication`)

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    })
  }
}
