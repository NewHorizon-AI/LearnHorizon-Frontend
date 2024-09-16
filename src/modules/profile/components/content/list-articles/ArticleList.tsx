/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useState, useEffect } from 'react'

// * Importar Interfaces
import { type IArticleWithData } from '@/interfaces/article/article.interface'

// * Importar estado global del usuario
import useUserGetStore from '@/contexts/api/get-user-store/index'

// * Importar getter de artículos paginados
import { getPagedArticlesByUsername } from '@/lib/apiArticle/get/page/getArticleByUserAndPage'

// * Importar componente de tarjeta de artículo
import ArticleCard from '../article-card/ArticleCard'

// * Importar componente de paginación
// import PaginationComponent from '../pagination/PaginationComponent'

// * Importar Vista de carga
import LoadingScreen from '@/components/loading/LoadingScreen'

const ArticleList: React.FC = () => {
  // TODO: Implementar correctamente la pagina de articulos del usuario

  const [articles, setArticles] = useState<IArticleWithData[]>([])

  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const postsPerPage = 20

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
    <section>
      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center items-center">
            <LoadingScreen message="Cargando articulos..." />
          </div>
        ) : (
          articles.map((article, index) => {
            return <ArticleCard key={index} article={article} />
          })
        )}
      </div>
    </section>
  )
}

export default ArticleList
