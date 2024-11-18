import React from 'react'

import { type IArticleCard } from './interfaces/articleCard.interface'
import { ArticleCard } from './articleCard/ArticleCard'

interface IArticleListProps {
  className?: string
  data: IArticleCard[]
}

const ArticleList: React.FC<IArticleListProps> = (props) => {
  const { className, data } = props

  return (
    <section
      className={`${className} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 2xl:grid-cols-4 gap-4`}
    >
      {data.map((article, index) => (
        <div key={index}>
          <ArticleCard data={article} />
        </div>
      ))}
    </section>
  )
}

export { ArticleList }
