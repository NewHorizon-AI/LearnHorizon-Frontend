/* eslint-disable @typescript-eslint/no-unsafe-argument */
import useUserStore from '@/contexts/user-store'

export const loginUser = async (): Promise<void> => {
  const { user, setUser } = useUserStore.getState()

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
      throw new Error('Error en la petición: ' + data.message)
    }

    setUser(data)
  } catch (error: any) {
    throw new Error('Error al crear usuario: ' + error.message)
  }
}
