// import { NextResponse, type NextRequest } from 'next/server'

// import apiClient from '@/lib/apiClient/apiClient'

// // Importacion de las interfaces
// import { type IArticleCard } from '@/interfaces/IBackend'

// export async function GET(request: NextRequest): Promise<NextResponse> {
//   try {
//     const { searchParams } = new URL(request.url)
//     const page = searchParams.get('page')
//     const pageSize = searchParams.get('pageSize')
//     const order = searchParams.get('order')

// const { data } = await apiClient.get<IArticleCard[]>(
//   `/publications/search`,
//   {
//     params: {
//       page,
//       pageSize,
//       order
//     }
//   }
// )

//     return NextResponse.json(data, { status: 200 })
//   } catch (error: any) {
//     const errorMessage =
//       error?.response?.data?.message ?? error?.message ?? 'An error occurred'

//     return NextResponse.json({ message: errorMessage }, { status: 500 })
//   }
// }
