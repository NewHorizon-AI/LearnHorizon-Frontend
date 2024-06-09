/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/prop-types */
'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { type IArticle } from '@/interfaces/IArticle'
import ArticlePage from '@/components/article/ArticlePage'

function ModelDetails(): React.JSX.Element {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  // Estado del modelo
  const [model, setModel] = useState<IArticle | null>(null)
  // Estados de carga y error
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

export default function ModelDetailsPage(): React.JSX.Element {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ModelDetails />
    </Suspense>
  )
}
