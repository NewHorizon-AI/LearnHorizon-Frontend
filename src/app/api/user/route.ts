import axios from 'axios';

export const GET = async (_req: Request): Promise<Response> => {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/api/users`,
      {
        headers: {
          'X-CSRFToken': process.env.CSRF_TOKEN,
        }
      }
    );

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};

export const POST = async (req: Request): Promise<Response> => {
  const newUser = await req.json();
  try {
    const { data } = await axios.post(
      `http://localhost:3001/api/users`,
      newUser,
      {
        headers: {
          'X-CSRFToken': process.env.CSRF_TOKEN,
        }
      }
    );

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};
