'use client'

import React, { useState, useEffect } from 'react'
import { type IArticleWithData } from '@/interfaces/article/article.interface'
import useUserGetStore from '@/contexts/api/get-user-store/index'
import { getPagedArticlesByUsername } from '@/lib/apiArticle/get/page/getArticleByUserAndPage'
import ArticleCard from '../article-card/ArticleCard'
import PaginationComponent from '../pagination/PaginationComponent'

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<IArticleWithData[]>([])

  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const postsPerPage = 3

  const { user } = useUserGetStore()

  useEffect(() => {
    const fetchArticleList = async (): Promise<void> => {
      setLoading(true)

      try {
        const data: IArticleWithData[] = await getPagedArticlesByUsername(
          user?._id,
          currentPage,
          postsPerPage,
          'ascendant'
        )

        setArticles(data)
      } catch (error) {
        console.error('Error fetching articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticleList().catch((error) => {
      console.error('Error fetching articles:', error)
    })
  }, [currentPage, postsPerPage, user?._id])

  return (
    <>
      <div className="space-y-6">
        {loading ? (
          <div className="text-center py-4">Cargando...</div>
        ) : (
          articles.map((article, index) => {
            console.log(article)
            console.log(index)
            return <ArticleCard key={index} article={article} />
          })
        )}
      </div>
    </>
  )
}

export default ArticleList
