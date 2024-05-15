import React from 'react'
import NavBar from '@/components/navbar/NavBar'
// import ArticleView from './ArticleView'

import Display from '@/components/article/modelDisplay/Display'
import ArticleContent from '@/components/article/articleContent/ArticleContent'

import { type IArticle } from '@/interface/IArticle'

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
        <ArticleContent model={model} />
      </main>
    </>
  )
}
