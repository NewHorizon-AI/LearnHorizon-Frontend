'use client'

import React, { useEffect, useState } from 'react'

import data from '../data/data.json'
import { Slider } from '@/components/common/slider/Slider'

import { getFilteredArticle } from '@/modules/landing/lib/getFilteredArticle'

import { ArticleList } from '../components/articleList/ArticleList'
import { Hero } from '../components/hero/Hero'

import { type IArticleCard } from '../components/articleList/interfaces/articleCard.interface'
import { type IArticleResponse } from '../interfaces/article-response'

const LandingView: React.FC = () => {
  const [articles, setArticles] = useState<IArticleCard[]>([])

  useEffect(() => {
    const fetchArticles = async (): Promise<void> => {
      try {
        const response: IArticleResponse = await getFilteredArticle()

        setArticles(response.items)
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

      <ArticleList className="md:pt-6 min-h-screen px-16" data={articles} />
    </div>
  )
}

export default LandingView
