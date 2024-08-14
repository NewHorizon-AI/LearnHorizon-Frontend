// ! Cambiar quien es el autor de un artículo, por el usuario que está logueado

'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

// * Importar componentes de UI
import { Button } from '@/components/ui/button'

// * Importar estados globales
import useArticleStore from '@/contexts/article/edit-article/useArticleStore'
import { createDefaultArticle } from '../../utils/createDefaultArticle'

interface ApiButtonProps {
  children: React.ReactNode
}

const ApiButton: React.FC<ApiButtonProps> = ({ children }) => {
  /*
   * Este componente se encarga de manejar la creación de un nuevo artículo.
   @ Param children: React.ReactNode - Contenido del botón.
   TODO: Implementar el uso de useRouter para redirigir al usuario a la página de edición del artículo.
   */

  // * Obtener el estado global de los artículos
  const setArticle = useArticleStore((state) => state.setArticle)

  const router = useRouter()

  // * Función para crear un nuevo artículo
  const handleCreateArticle = async (): Promise<void> => {
    try {
      const composite = await createDefaultArticle()

      setArticle(composite)

      const articleId = composite.article._id

      // await router.push(`/article/${articleId}/edit`)

      router.push(`/article/${articleId}/edit`)
      // window.location.href = `/article/${articleId}/edit`
    } catch (error) {
      console.error('Error al crear artículo:', error)
    }
  }

  // * Función para manejar el click del botón
  const onClickHandler = (): void => {
    handleCreateArticle().catch((error) => {
      console.error('Error handling click:', error)
    })
  }

  // * Renderizar el botón
  return <Button onClick={onClickHandler}>{children}</Button>
}

export default ApiButton
