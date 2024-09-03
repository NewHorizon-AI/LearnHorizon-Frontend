import React from 'react'
import { useRouter } from 'next/navigation' // Asegúrate que la importación del useRouter es correcta
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Share2, Pencil, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import getStatusColor from './getStatusColor'
import { type IArticleWithData } from '@/interfaces/article/article.interface'

interface ArticleCardProps {
  article?: IArticleWithData // Haciendo article opcional para manejar casos donde pueda ser undefined
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const router = useRouter()

  // Verifica si el artículo es undefined o null antes de intentar renderizar
  if (article == null) {
    return <div>Cargando artículo...</div> // O cualquier otro componente de carga que prefieras
  }

  return (
    <Card
      className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => {
        router.push(`/article/${article._id}`)
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-semibold text-gray-800">
            {article.title}
          </CardTitle>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-sm text-gray-500">
              {article.data?.description}
            </span>
            <Badge className={getStatusColor(article.status)}>
              {article.status}
            </Badge>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Edit post"
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/article/${article._id}/edit`)
            }}
          >
            <Pencil className="h-5 w-5 text-blue-600" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Delete post">
            <Trash2 className="h-5 w-5 text-red-600" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{article.data?.description}</p>
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ArticleCard
