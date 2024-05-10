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

  const [model, setModel] = useState<IArticle>({} as IArticle)

  useEffect(() => {
    const fetchModel = async () => {
      const response = await fetch(`/api/model/${id}`)
      const data: IArticle = await response.json()
      console.log(data)
      setModel(data)
    }

    try {
      fetchModel()
    } catch (error: any) {
      console.error(error)
    }
  }, [id])

  return <ArticlePage model={model} />
}
