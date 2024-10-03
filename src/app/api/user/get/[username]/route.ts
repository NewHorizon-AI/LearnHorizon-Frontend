import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

import { type IUserWithoutPassword } from '@/interfaces/user/user.interface'

interface Params {
  username: string
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
    TODO: Cambiar el tipo del usuario a IUserComposite cuando sea necesario
   */

  const username = params.username

  if (username == null) {
    return new NextResponse('No user ID provided', { status: 400 })
  }

  try {
    const response = await apiClient.get(`/get/u/${username}`)

    const user: IUserWithoutPassword = response.data

    return new NextResponse(JSON.stringify(user))
  } catch (error: any) {
    return new NextResponse('Error fetching user', { status: 500 })
  }
}
