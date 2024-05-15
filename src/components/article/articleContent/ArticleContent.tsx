import React from 'react'

import { Button } from '@/components/ui/button'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'

import { Badge } from '@/components/ui/badge'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { FaThumbsUp, FaThumbsDown, FaShareAlt, FaSave } from 'react-icons/fa'

import { type IArticle } from '@/interface/IArticle'

export default function ArticleContent({
  model
}: {
  model: IArticle
}): React.JSX.Element {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-6">
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage alt="Channel Avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">
              Cómo hacer una página web con React
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Canal de Codificación</span>
              <span>•</span>
              <span>1.2M visualizaciones</span>
              <span>•</span>
              <span>Hace 2 semanas</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <FaThumbsUp className="w-6 h-6" />
            </Button>
            <Button size="icon" variant="ghost">
              <FaThumbsDown className="w-6 h-6" />
            </Button>
            <Button size="icon" variant="ghost">
              <FaShareAlt className="w-6 h-6" />
            </Button>
            <Button size="icon" variant="ghost">
              <FaSave className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <div className="grid gap-2">
          <p>
            En este video, aprenderás a crear una página web utilizando React,
            una de las bibliotecas de JavaScript más populares para el
            desarrollo de interfaces de usuario. Cubriremos los conceptos
            básicos de React, como componentes, estado y props, y te guiaremos
            paso a paso para que puedas construir tu propia aplicación web.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>Desarrollo web</Badge>
            <Badge>Tutoriales</Badge>
            <Badge>Programación</Badge>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <img
                  alt="Video Thumbnail"
                  className="rounded-md object-cover aspect-video"
                  height={90}
                  src="/placeholder.svg"
                  width={120}
                />
                <div>
                  <h3 className="font-medium">
                    Cómo crear un sitio web con HTML y CSS
                  </h3>
                  <div className="text-sm text-gray-500">
                    Canal de Codificación • 500K visualizaciones
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  alt="Video Thumbnail"
                  className="rounded-md object-cover aspect-video"
                  height={90}
                  src="/placeholder.svg"
                  width={120}
                />
                <div>
                  <h3 className="font-medium">
                    Introducción a JavaScript: Conceptos básicos
                  </h3>
                  <div className="text-sm text-gray-500">
                    Canal de Codificación • 800K visualizaciones
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  alt="Video Thumbnail"
                  className="rounded-md object-cover aspect-video"
                  height={90}
                  src="/placeholder.svg"
                  width={120}
                />
                <div>
                  <h3 className="font-medium">
                    Cómo desplegar una aplicación en la nube
                  </h3>
                  <div className="text-sm text-gray-500">
                    Canal de Codificación • 400K visualizaciones
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
