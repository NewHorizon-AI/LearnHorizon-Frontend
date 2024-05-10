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
        <div className="grid gap-6">
          <Display modelData={model.photo} />
          <ArticleContent model={model} />
        </div>
        {/* <ArticleView model={model} /> */}
      </main>
    </>
  )
}

// import Link from 'next/link'

// export default function Component() {
//   return (
//     <>
//       <main className="">
//
//       </main>
//     </>
//   )
// }
