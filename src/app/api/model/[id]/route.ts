/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient/apiClient'

import { type IFileGltf } from '@/interfaces/model/file.interface'

interface Params {
  id: string
}

export async function GET(
  req: Request,
  { params }: { params: Params }
): Promise<NextResponse> {
  /*
   * Funcion que se encarga de obtener un modelo de la base de datos
   */

  const articleId = params.id

  if (articleId == null) {
    return new NextResponse('No article ID provided', { status: 400 })
  }

  try {
    const response = await apiClient.get(`/model/${articleId}`)

    const file: IFileGltf = response.data

    return new NextResponse(JSON.stringify(file))
  } catch (error: any) {
    return new NextResponse(error)
  }
}
