import { type IUserWithoutPassword } from '@/interfaces/user/user.interface'

export const fetchUserProfileData = async (
  username: string
): Promise<IUserWithoutPassword> => {
  try {
    const response = await fetch(`/api/user/get/${username}`)

    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()

    const user: IUserWithoutPassword = data
    return user
  } catch (error: any) {
    console.error('Error fetching User:', error.message)
    throw error
  }
}
