'use client'

import React, { useState, useEffect } from 'react'
import { type IArticle } from '@/interfaces/IArticle'
import { useSearchParams } from 'next/navigation'

import ArticlePage from '@/components/article/ArticlePage'

export default function ModelDetailsPage({
  params
}: {
  params: { id: string }
}): React.JSX.Element {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  // Estado del modelo
  const [model, setModel] = useState<IArticle | null>(null)

  // Estados de carga y error6
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchModel = async (): Promise<void> => {
      try {
        const response = await fetch(`/api/model/${id}`)
        if (!response.ok) {
          throw new Error('No se pudo cargar el modelo')
        }
        const data: IArticle = await response.json()
        setModel(data)
      } catch (error: any) {
        console.error(error)
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('Error desconocido')
        }
      } finally {
        setLoading(false)
      }
    }

    if (id != null) {
      void fetchModel()
    } else {
      setLoading(false)
    }
  }, [id])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error != null) {
    return <div>Error: {error}</div>
  }

  if (model == null) {
    return <div>No se encontró el modelo</div>
  }

  return <ArticlePage model={model} />
}
