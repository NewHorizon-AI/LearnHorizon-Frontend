/* eslint-disable @typescript-eslint/explicit-function-return-type */
import useUserStore from '@/contexts/user-store/useUserStore'

const useLoginUserForm = () => {
  const { updateUser } = useUserStore()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    if (name === 'identifier') {
      // Decide si es email o username basado en la presencia de '@'
      const key = value.includes('@') ? 'email' : 'username'
      updateUser({ [key]: value })
    } else {
      // Para otros campos, como la contraseña
      updateUser({ [name]: value })
    }
  }

  return { handleChange }
}

export default useLoginUserForm
