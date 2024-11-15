/* eslint-disable @typescript-eslint/no-confusing-void-expression */
'use client'

import React from 'react'

// * Importacion de componentes
import { ModelHandler } from '../components/modelContent'
import { ArticleFormData } from '../components/leftSidebar/ArticleFormData'
import { ArticleMarkdown } from '../components/belowContent/ArticleMarkdown'
import { Menu } from '../components/menu'

import useEditArticleStore from '@/contexts/article/get'

const EditArticleView: React.FC = () => {
  const { article } = useEditArticleStore()

  if (article == null) {
    return (
      <div>
        <h1>Article not found</h1>
      </div>
    )
  }

  return (
    <main className="flex flex-col items-center w-full overflow-hidden ">
      <div className="flex flex-col md:flex-row w-full">
        <ModelHandler
          articleId={article._id}
          className="flex-grow md:flex-grow-0 md:w-3/4 aspect-video"
        />

        <Menu className="flex-grow md:w-1/4 px-4 pt-4 " />
      </div>

      <div className="flex w-full px-4 pt-4">
        <div className="w-1/4">
          <ArticleFormData />
        </div>
        <div className="flex-1 pl-4">
          <ArticleMarkdown />
        </div>
      </div>
    </main>
  )
}

export default EditArticleView
