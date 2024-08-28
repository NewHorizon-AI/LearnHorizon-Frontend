import useUserGetStore from '@/contexts/api/get-user-store/index'

import { type IUserWithoutPassword } from '@/interfaces/user/user.interface'

export const fetchUserProfileData = async (username: string): Promise<void> => {
  try {
    const response = await fetch(`/api/user/get/${username}`)

    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()

    const user: IUserWithoutPassword = data
    useUserGetStore.getState().setUser(user)
  } catch (error: any) {
    console.error('Error fetching User:', error.message)
    throw error
  }
}
