'use client'

import React, { useState, useEffect } from 'react'
import { type IArticle } from '@/interface/IArticle'
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
    const fetchModel = async () => {
      try {
        const response = await fetch(`/api/model/${id}`)
        if (!response.ok) {
          throw new Error('No se pudo cargar el modelo')
        }
        const data: IArticle = await response.json()
        setModel(data)
      } catch (error: any) {
        console.error(error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchModel()
    } else {
      setLoading(false)
    }
  }, [id])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!model) {
    return <div>No se encontró el modelo</div>
  }

  return <ArticlePage model={model} />
}
