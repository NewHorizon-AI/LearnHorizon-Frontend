'use client'

import React, { useEffect, useState } from 'react'

import data from '../data/data.json'
import { Slider } from '@/components/common/slider/Slider'

import { getFilteredArticle } from '@/lib/articles/getFilteredArticle'
import { type IArticle } from '@/interfaces/article/article.interface'

import { ArticleList } from '../components/articleList/ArticleList'

const LandingView: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([])

  useEffect(() => {
    const fetchArticles = async (): Promise<void> => {
      try {
        const response: IArticle[] = await getFilteredArticle()

        setArticles(response)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }
    fetchArticles().catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <div>
      <Slider className="md:h-[45vh] lg:h-[65vh]" data={data} />
      <ArticleList data={articles} />
    </div>
  )
}

export default LandingView
