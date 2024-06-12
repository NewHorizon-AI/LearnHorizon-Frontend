import React from 'react'

import {
  type IArticleDataProps,
  type IArticleSubmitProps
} from '@/interfaces/formData/INewPublication'

import NavBar from '@/components/navbar/NavBar'

import ArticleFormData from '@/components/article/create/elements/ArticleFormData'
import Upload from '@/components/article/create/elements/ArticleUploadModel'
import Model3DInputs from './elements/ArticleModel3DControls'
import ArticleMarkdown from './elements/ArticleMarkdown'

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
}: ManageArticlePageProps): React.JSX.Element => (
  <>
    <NavBar />
    <main className="flex flex-col items-center p-4 w-full overflow-hidden">
      <div className="flex w-full">
        {/* Columna izquierda: Formulario */}
        <div className="flex flex-col w-full md:w-1/5 p-4">
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
          <div className="flex w-full ">
            {/* Subida de Archivos */}
            <div className=" aspect-video w-full h-full">
              <Upload file={file} />
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
          <div className="flex flex-col w-full p-4">
            <h2 className="text-xl font-bold">Markdown Content</h2>
            <ArticleMarkdown
              markdownContent={markdownContent}
              isPreview={isPreview}
            />
          </div>
          {/* Botón Extra */}
          <div className="w-full flex justify-center mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Extra Button
            </button>
          </div>
        </div>
      </div>
    </main>
  </>
)

export default ManageArticlePage
