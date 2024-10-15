/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'
import { type IArticle } from '@/interfaces/article/article.interface'

export async function POST(req: Request): Promise<NextResponse> {
  // Obtener el cuerpo de la solicitud
  const usersIds = await req.json() // Ahora esperamos un arreglo de userId

  if (!usersIds || usersIds.length === 0) {
    return new NextResponse('No se ha proporcionado ningún ID de usuario', {
      status: 400
    })
  }

  console.log(usersIds)

  try {
    const response = await apiClient.post<IArticle[]>(
      '/articles/v2/users',
      usersIds
    )

    console.log(response)

    const data: IArticle[] = response.data

    return new NextResponse(JSON.stringify(data), { status: 200 })
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}

// /* eslint-disable @typescript-eslint/no-unsafe-argument */
// import { NextResponse } from 'next/server'
// import apiClient from '@/lib/apiClient/apiClient'

// import { type IArticle } from '@/interfaces/article/article.interface'

// // * Interface enum para el orden de los articulos
// interface orderEnum {
//   ascendant: 'ascendant'
//   descendant: 'descendant'
// }

// interface Params {
//   userId: string
//   page: number
//   pageSize: number
//   order: orderEnum
// }

// export async function GET(
//   req: Request,
//   { params }: { params: Params }
// ): Promise<NextResponse> {
//   /*
//    * Funcion que se encarga de obtener un articulo de la base de datos
//    * @param {Request} req - Request de la petición
//    * @param {Params} params - Parámetros de la petición

//     TODO: Mejorar la recepcion de parametros por la URL para evitar errores de tipo en tiempo de ejecución
//    */

//   // * obtener los parametros de la URL
//   const userId = params.userId

//   // // * obtener los parametros de la request
//   // const { searchParams } = new URL(req.url)

//   // const page = searchParams.get('page')
//   // const pageSize = searchParams.get('pageSize')
//   // const order = searchParams.get('order')

//   if (userId == null) {
//     return new NextResponse('No se ha proporcionado un ID de usuario', {
//       status: 400
//     })
//   }

//   try {
//     const response = await apiClient.get<IArticle[]>(
//       `/articles/username/${userId}`
//       // ,
//       // {
//       //   params: {
//       //     page,
//       //     pageSize,
//       //     order
//       //   }
//       // }
//     )

//     const data: IArticle[] = response.data

//     return new NextResponse(JSON.stringify(data), { status: 200 })
//   } catch (error: any) {
//     return new NextResponse(error.message, { status: 500 })
//   }
// }
