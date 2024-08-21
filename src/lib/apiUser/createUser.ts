/* eslint-disable @typescript-eslint/no-unsafe-argument */

import useUserStore from '@/contexts/user-store'

export const createUser = async (): Promise<void> => {
  const { user } = useUserStore.getState()

  try {
    const response = await fetch('/api/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    if (!response.ok) {
      console.error('Error en la petición:', data.message)
      throw new Error(data.message)
    }
    console.log('Usuario creado con éxito:', data)
  } catch (error) {
    console.error('Error al crear usuario:', error)
  }
}
