import React from 'react'

import MainLayout from '@/layouts/Main-Layout/MainLayout'

import DisplayArticle from './components/Display-Model-Article/DisplayArticle'

import LeftSidebar from './components/Left-Sidebar/LeftSidebar'
import RightSidebar from './components/Right-Sidebar/RightSidebar'
import ArticleContent from './components/Article-Content/ArticleContent'

import { type IArticle } from '@/interfaces/IArticle'

export default function ArticlePage({
  article
}: {
  article: IArticle
}): React.JSX.Element {
  return (
    <MainLayout>
      <DisplayArticle articleData={article.photo} />
      <div className="min-h-screen flex px-6">
        <LeftSidebar />
        <ArticleContent articleData={article} />
        <RightSidebar />
      </div>
    </MainLayout>
  )
}
