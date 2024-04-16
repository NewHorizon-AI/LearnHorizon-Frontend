import axios from 'axios'

interface Params {
  id: string
}

export const GET = async (
  req: Request,
  { params }: { params: Params }
): Promise<Response> => {
  try {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/eventApp/api/events/${params.id}`,
      {
        headers: {
          'X-CSRFToken': process.env.CSRF_TOKEN
        }
      }
    )

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    })
  }
}
