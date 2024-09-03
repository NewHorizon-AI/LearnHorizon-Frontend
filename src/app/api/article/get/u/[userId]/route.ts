import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

import { type IArticleWithData } from '@/interfaces/article/article.interface'

// * Interface enum para el orden de los articulos
interface orderEnum {
  ascendant: 'ascendant'
  descendant: 'descendant'
}

interface Params {
  userId: string
  page: number
  pageSize: number
  order: orderEnum
}

export async function GET(
  req: Request,
  { params }: { params: Params }
): Promise<NextResponse> {
  /*
   * Funcion que se encarga de obtener un articulo de la base de datos
   * @param {Request} req - Request de la petición
   * @param {Params} params - Parámetros de la petición

    TODO: Mejorar la recepcion de parametros por la URL para evitar errores de tipo en tiempo de ejecución 
   */

  // * obtener los parametros de la URL
  const userId = params.userId

  // * obtener los parametros de la request
  const { searchParams } = new URL(req.url)

  const page = searchParams.get('page')
  const pageSize = searchParams.get('pageSize')
  const order = searchParams.get('order')

  if (userId == null) {
    return new NextResponse('No user ID provided', { status: 400 })
  }

  try {
    const response = await apiClient.get<IArticleWithData[]>(
      `/articles/u/${userId}`,
      {
        params: {
          page,
          pageSize,
          order
        }
      }
    )

    const data: IArticleWithData[] = response.data

    return new NextResponse(JSON.stringify(data), { status: 200 })
  } catch (error: any) {
    return new NextResponse('Error fetching user', { status: 500 })
  }
}
