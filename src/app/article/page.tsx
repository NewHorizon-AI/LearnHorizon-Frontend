/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/prop-types */
'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { type IArticle } from '@/interfaces/IArticle'
import ArticlePage from '@/components/article/ArticlePage'

function ArticleDetails(): React.JSX.Element {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  // Estado del articleo
  const [article, setArticle] = useState<IArticle | null>(null)
  // Estados de carga y error
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async (): Promise<void> => {
      try {
        const response = await fetch(`/api/article/${id}`)
        if (!response.ok) {
          throw new Error('No se pudo cargar el articleo')
        }
        const data: IArticle = await response.json()
        setArticle(data)
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
      void fetchArticle()
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

  if (article == null) {
    return <div>No se encontró el articleo</div>
  }

  return <ArticlePage article={article} />
}

export default function ArticleDetailsPage(): React.JSX.Element {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ArticleDetails />
    </Suspense>
  )
}
