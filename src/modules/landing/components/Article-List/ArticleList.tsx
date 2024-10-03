import React from 'react'

// Importando componentes
import CategoriesNav from '../Left-Sidebar/CategoriesNav'
import { ArticlesDisplay } from '@/components/ui/articleDisplay'
import SearchBar from '@/components/ui/search'

// Importando tipos
import {
  type IArticleCard,
  type IFindArticles,
  type ICategory
} from '@/interfaces/IBackend'

export default function ArticleExplorer({
  articles,
  // setArticles,
  categories,
  loadingArticles,
  errorArticles,
  loadingCategories,
  errorCategories
}: {
  articles: IArticleCard[]
  setArticles: React.Dispatch<React.SetStateAction<IFindArticles>>
  categories: ICategory[]
  loadingArticles: boolean
  errorArticles: string | null
  loadingCategories: boolean
  errorCategories: string | null
}): React.JSX.Element {
  // Función para renderizar el contenido
  const renderContent = (
    loading: boolean,
    error: string | null,
    component: React.JSX.Element
  ): React.JSX.Element => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-full">
          Loading...
        </div>
      )
    }
    if (error != null) {
      return (
        <div className="flex items-center justify-center h-full">{error}</div>
      )
    }
    return component
  }

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      <div className="pl-8">
        {renderContent(
          loadingCategories,
          errorCategories,
          <CategoriesNav categories={categories} />
        )}
      </div>
      <div className="flex-grow sm:container">
        <SearchBar className="pb-4" />
        {renderContent(
          loadingArticles,
          errorArticles,
          <ArticlesDisplay articles={articles} />
        )}
      </div>
    </section>
  )
}
