/* eslint-disable @typescript-eslint/explicit-function-return-type */
import useUserStore from '@/contexts/user-store/useUserStore'

const useUserForm = () => {
  /*
   * Hook que se encarga de manejar el cambio de los campos del formulario
   */

  const { updateUser } = useUserStore()

  const handleChange = (event: { target: { name: any; value: any } }): void => {
    const { name, value } = event.target
    // console.log(name, value)
    updateUser({ [name]: value })
  }

  return { handleChange }
}

export default useUserForm
