/* eslint-disable @next/next/no-img-element */

'use client'

import React from 'react'
import useEditArticleStore from '@/contexts/article/get'

interface RightSidebarProps {
  className?: string
}

const RightSidebar: React.FC<RightSidebarProps> = (props) => {
  const { className } = props
  const { article } = useEditArticleStore()

  return (
    <aside
      className={` ${className} w-full md:w-64 border-b md:border-l border-border p-4 hidden md:block`}
    >
      <div className="mb-6">
        <img
          src="/placeholder.svg?height=200&width=200"
          alt="Imagen del artículo"
          className="object-cover rounded-md"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Autores</h3>
        <div className="flex-col">
          {article?.users.map((user, index) => (
            <div key={index} className="flex flex-col items-center space-x-2">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
                className="rounded-full"
              />
              <div>{user.username}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar
