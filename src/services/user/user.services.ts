/* eslint-disable @typescript-eslint/no-unsafe-argument */

import {
  type IPostUser,
  type IUserWithoutPassword
} from '@/interfaces/user/user.interface'

const postUser = async (user: IPostUser): Promise<IUserWithoutPassword> => {
  const response = await fetch('/api/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })

  // Verificar si la respuesta es exitosa antes de convertirla a JSON
  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Error en la solicitud: ${response.status} - ${errorText}`)
  }

  const data: IUserWithoutPassword = await response.json()

  return data
}

export default postUser
