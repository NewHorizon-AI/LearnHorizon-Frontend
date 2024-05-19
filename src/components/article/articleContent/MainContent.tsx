import { IArticle } from '@/interface/IArticle'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function MainContent({
  modelData
}: {
  modelData: IArticle
}): React.JSX.Element {
  return (
    <main className="flex-1 p-8">
      <div>
        <h1 className="text-3xl font-bold">{modelData.title}</h1>
        {/* Mapéo de todos los autores */}
        {modelData.author.map((author) => (
          <p className="mt-1">Autor: {author.name}</p>
        ))}
        <p className="mt-1">
          Fecha de publicación: 9 sept. 2009 | Última actualización: 4 oct. 2022
        </p>
        <p className="mt-4">{modelData.description}</p>
      </div>

      <ReactMarkdown className="prose prose-invert mt-8 text-black min-w-full">
        {modelData.markdownContent}
      </ReactMarkdown>
    </main>
  )
}
