import React from 'react'

import MainCarousel from './Carousel/MainCarousel'
import WelcomeSection from './Welcome/WelcomeSection'
import ArticleList from './Article-List/ArticleList'

// Importing types
import {
  type IArticleCard,
  type IFindArticles,
  type ICategory
} from '@/interfaces/IBackend'

function ManageLanding({
  carousel,
  loadingCarousel,
  errorCarousel,
  articles,
  setArticles,
  categories,
  loadingArticles,
  errorArticles,
  loadingCategories,
  errorCategories
}: {
  carousel: any
  loadingCarousel: boolean
  errorCarousel: string | null
  articles: IArticleCard[]
  setArticles: React.Dispatch<React.SetStateAction<IFindArticles>>
  categories: ICategory[]
  loadingArticles: boolean
  errorArticles: string | null
  loadingCategories: boolean
  errorCategories: string | null
}): React.JSX.Element {
  return (
    <div>
      <MainCarousel
        carouselData={carousel}
        loadingCarousel={loadingCarousel}
        errorCarousel={errorCarousel}
      />

      <WelcomeSection />
      <ArticleList
        articles={articles}
        setArticles={setArticles}
        categories={categories}
        loadingArticles={loadingArticles}
        errorArticles={errorArticles}
        loadingCategories={loadingCategories}
        errorCategories={errorCategories}
      />
    </div>
  )
}

export default ManageLanding
