/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

import { type IArticleCard } from '../interfaces/articleCard.interface'

interface IArticleCardProps {
  className?: string
  data: IArticleCard
}

const ArticleCard: React.FC<IArticleCardProps> = (props) => {
  const { _id, title, photo, categories, users, views, likes, createdAt } =
    props.data

  const { className } = props

  const date = new Date(createdAt)

  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  return (
    <Link href={`/article/${_id}`} className={`${className} `}>
      <div className="bg-slate-50 rounded-xl">
        <img
          src={photo}
          alt="Thumbnail"
          className="w-full h-auto aspect-video rounded-t-lg"
        />
        <div className="p-4 ">
          <h3 className="text-lg font-bold line-clamp-2">{title}</h3>
          <div className="flex items-center mt-2">
            {/* Iterar sobre el arreglo de autores y generar un elemento para cada uno */}
          </div>
          <div className="flex justify-between items-center mt-2 text-gray-600">
            <span>
              {categories.map((category, index) => (
                <div key={index}>{category.name}</div>
              ))}
            </span>
            <span>
              {users.map((user, index) => (
                <div key={index}>{user.username}</div>
              ))}
            </span>
            <span>👁️ {views} vistas</span>
            <span>👍 {likes} me gusta</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export { ArticleCard }
