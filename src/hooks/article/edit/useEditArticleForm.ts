/* eslint-disable @typescript-eslint/explicit-function-return-type */
// import useUserStore from '@/contexts/user-store/useUserStore'

import useEditArticleStore from '@/contexts/article/edit'

const useRegisterUserForm = () => {
  /*
   * Hook que se encarga de manejar el cambio de los campos del formulario
   */

  const { updateArticle } = useEditArticleStore()

  const handleChange = (event: { target: { name: any; value: any } }): void => {
    const { name, value } = event.target
    console.log(name, value)
    updateArticle({ [name]: value })
  }

  return { handleChange }
}

export default useRegisterUserForm
