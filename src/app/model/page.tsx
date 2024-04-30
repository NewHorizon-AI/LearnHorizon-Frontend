'use client'

import React, { useState, useEffect } from 'react'
import { type IArticlePublication } from '@/interface/IBackend'
import { useSearchParams } from 'next/navigation'

import Article from '@/components/article/Article'

export default function ModelDetailsPage({
  params
}: {
  params: { id: string }
}): React.JSX.Element {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const [model, setModel] = useState<IArticlePublication>(
    {} as IArticlePublication
  )

  useEffect(() => {
    const fetchModel = async () => {
      const response = await fetch(`/api/model/${id}`)
      const data: IArticlePublication = await response.json()
      setModel(data)
    }

    try {
      fetchModel()
    } catch (error: any) {
      console.error(error)
    }
  }, [id])

  return <Article model={model} />
}
