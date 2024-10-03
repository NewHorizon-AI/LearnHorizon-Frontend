// import axios from 'axios'

// // Definimos la interfaz para los parámetros recibidos en las rutas
// interface Params {
//   id: string
// }

// // Definimos la interfaz para las peticiones con body en PATCH
// interface PatchRequestBody {
//   title: string
//   description: string
//   date: Date
//   location: string
// }

// // Especificamos el tipo de retorno de las funciones
// export const GET = async (
//   req: Request,
//   { params }: { params: Params }
// ): Promise<Response> => {
//   try {
//     const { data } = await axios.get(
//       `http://127.0.0.1:8000/eventApp/api/events/${params.id}`,
//       {
//         headers: {
//           'X-CSRFToken': process.env.CSRF_TOKEN
//         }
//       }
//     )

//     return new Response(JSON.stringify(data), { status: 200 })
//   } catch (error: any) {
//     return new Response(JSON.stringify({ message: error.message }), {
//       status: 500
//     })
//   }
// }

// export const DELETE = async (
//   req: Request,
//   { params }: { params: Params }
// ): Promise<Response> => {
//   try {
//     const { data } = await axios.delete(
//       `http://127.0.0.1:8000/eventApp/api/events/${params.id}`,
//       {
//         headers: {
//           'X-CSRFToken': process.env.CSRF_TOKEN
//         }
//       }
//     )

//     return new Response(JSON.stringify(data), { status: 200 })
//   } catch (error: any) {
//     return new Response(JSON.stringify({ message: error.message }), {
//       status: 500
//     })
//   }
// }

// export const PATCH = async (
//   req: Request,
//   { params }: { params: Params }
// ): Promise<Response> => {
//   const requestBody: PatchRequestBody = await req.json()
//   try {
//     const updateEvent = {
//       title: requestBody.title,
//       description: requestBody.description,
//       date: requestBody.date,
//       location: requestBody.location
//     }

//     const { data } = await axios.patch(
//       `http://127.0.0.1:8000/eventApp/api/events/${params.id}/`,
//       updateEvent,
//       {
//         headers: {
//           'X-CSRFToken': process.env.CSRF_TOKEN
//         }
//       }
//     )

//     return new Response(JSON.stringify(data), { status: 200 })
//   } catch (error: any) {
//     return new Response(JSON.stringify({ message: error.message }), {
//       status: 500
//     })
//   }
// }
