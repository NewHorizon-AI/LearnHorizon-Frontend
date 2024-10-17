/* eslint-disable @typescript-eslint/no-unsafe-argument */
import useUserStore from '@/contexts/user-store'

export const createUser = async (): Promise<void> => {
  const { user, setUser } = useUserStore.getState()

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
      throw new Error('Error en la petición: ' + data.message)
    }

    setUser(data)
  } catch (error: any) {
    throw new Error('Error al crear usuario: ' + error.message)
  }
}
