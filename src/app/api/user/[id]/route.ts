import axios from 'axios';

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> => {
  try {
    const { data } = await axios.get(`http://localhost:3001/users/${params.id}`, {
      headers: {
        'X-CSRFToken': process.env.CSRF_TOKEN,
      },
    });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> => {
  const updatedUser = await req.json();
  try {
    const { data } = await axios.put(`http://localhost:3001/users/${params.id}`, updatedUser, {
      headers: {
        'X-CSRFToken': process.env.CSRF_TOKEN,
      },
    });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
};
