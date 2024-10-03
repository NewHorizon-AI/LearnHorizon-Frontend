import React from 'react'
import EditArticleModule from '@/modules/edit-article/index'

interface EditArticlePageParams {
  params: {
    articleId: string
  }
}

const EditArticlePage: React.FC<EditArticlePageParams> = ({ params }) => {
  return <EditArticleModule articleId={params.articleId} />
}

export default EditArticlePage

// 'use client'

// import React, { useEffect } from 'react'
// import EditArticleModule from '@/modules/edit-article/EditArticleModule'

// import { fetchArticle } from '@/lib/apiArticle/fetchArticle'
// import { fetchModel } from '@/lib/apiModel/fetchModel'

// interface EditArticlePageParams {
//   params: { articleId: string }
// }

// const EditArticlePage: React.FC<EditArticlePageParams> = ({ params }) => {
//   useEffect(() => {
//     console.log(`Carga de artículo con id: ${params.articleId}`)
//     void fetchArticle(params.articleId)
//     void fetchModel(params.articleId)
//   }, [params.articleId])

//   return <EditArticleModule />
// }

// export default EditArticlePage
