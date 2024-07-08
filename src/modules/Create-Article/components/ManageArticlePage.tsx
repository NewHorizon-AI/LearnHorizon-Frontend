import React from 'react'

import {
  type IArticleDataProps,
  type IArticleSubmitProps
} from '@/interfaces/formData/INewPublication'

import ArticleFormData from './ArticleFormData'

import Model3DInputs from './ArticleModel3DControls'
import ArticleMarkdown from './ArticleMarkdown'

import UploadModel from '@/modules/Upload-Model/UploadModel'

type ManageArticlePageProps = IArticleDataProps & IArticleSubmitProps

const ManageArticlePage = ({
  title,
  subtitle,
  photo,
  description,
  markdownContent,
  isPreview,
  author,
  category,
  objectName,
  coordinates,
  rotationAngles,
  scale,
  file,
  onSubmit
}: ManageArticlePageProps): React.JSX.Element => {
  return (
    <main className="flex flex-col items-center  w-full overflow-hidden ">
      <div className="flex w-full p-4">
        {/* Columna izquierda: Formulario */}
        <div className="flex flex-col w-full md:w-1/5 pr-4">
          <ArticleFormData
            title={title}
            subtitle={subtitle}
            photo={photo}
            description={description}
            author={author}
            category={category}
          />
        </div>

        {/* Contenedor derecho */}
        <div className="flex flex-col w-full md:w-4/5">
          <div className="flex w-full">
            {/* Subida de Archivos */}
            <div className="aspect-video w-full h-full">
              <UploadModel file={file} />
            </div>
            {/* Modelo 3D */}
            <div className="hidden lg:flex w-1/2 p-4">
              <Model3DInputs
                objectName={objectName}
                coordinates={coordinates}
                rotationAngles={rotationAngles}
                scale={scale}
              />
            </div>
          </div>

          {/* Contenido de Markdown */}
          <div className="flex flex-col w-full pt-4">
            <h2 className="text-xl font-bold">Markdown Content</h2>
            <ArticleMarkdown
              markdownContent={markdownContent}
              isPreview={isPreview}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ManageArticlePage
