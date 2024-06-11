import { type IArticle } from '@/interfaces/IArticle'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { FaPen } from 'react-icons/fa'
import { Separator } from '@/components/ui/separator'

export default function MainContent({
  articleData
}: {
  articleData: IArticle
}): React.JSX.Element {
  const publicationDate =
    articleData.publicationDate.length > 0
      ? formatDate(articleData.publicationDate)
      : 'Fecha desconocida'
  // const updateDate = articleData.updateDate
  //   ? formatDate(articleData.updateDate)
  //   : 'Fecha desconocida'
  // Función para formatear la fecha
  function formatDate(dateString: string): string {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
    const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(date)
    return formattedDate.replace('.', '')
  }

  return (
    <main className="flex-1 p-8">
      <div>
        <h1 className="text-3xl font-bold">{articleData.title}</h1>
        {/* Mapéo de todos los autores */}
        <div className="flex items-center mt-2">
          <FaPen className="text-xl mr-2" />
          <div className="flex flex-wrap">
            {articleData.author.map((author, index) => (
              <div key={index} className="flex items-center mr-4 mt-1">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <p className="pr-4">{author.name}</p>
                <p>{author.followers} Seguidores</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4 flex h-5 items-center space-x-4 text-sm">
          <div>Fecha de publicación: {publicationDate}</div>
          <Separator orientation="vertical" />
          <div>Última actualización: 4 oct. 2022</div>
        </div>

        <p className="mt-4">{articleData.description}</p>
      </div>
      <Separator className="my-4" />

      <ReactMarkdown className="prose prose-invert mt-6 text-black min-w-full">
        {articleData.markdownContent}
      </ReactMarkdown>
    </main>
  )
}
