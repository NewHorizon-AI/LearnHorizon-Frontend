import React from 'react'
import NavBar from '@/components/navbar/NavBar'
// import ArticleView from './ArticleView'

import Display from '@/components/article/modelDisplay/Display'

import SidebarLeft from '@/components/article/articleContent/SidebarLeft'
import SidebarRight from '@/components/article/articleContent/SidebarRight'
import MainContent from '@/components/article/articleContent/MainContent'

import { type IArticle } from '@/interfaces/IArticle'

export default function ArticlePage({
  model
}: {
  model: IArticle
}): React.JSX.Element {
  return (
    <>
      <NavBar />
      <main>
        <Display modelData={model.photo} />
        <div className="min-h-screen flex px-6">
          <SidebarLeft />
          <MainContent modelData={model} />
          <SidebarRight />
        </div>
      </main>
    </>
  )
}
