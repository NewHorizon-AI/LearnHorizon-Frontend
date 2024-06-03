import React from 'react'
import Form from '@/components/publicationForm/Form'
import Upload from '@/components/publicationForm/Upload'
import Model3DInputs from './Model3DInputs'
import {
  type IPublicationFormProps,
  type IUploadProps,
  type IFile
} from '@/interfaces/formData/INewPublication'
import NavBar from '../navbar/NavBar'
import ReactMarkdown from 'react-markdown'

interface FormLayoutProps extends IPublicationFormProps, IUploadProps, IFile {
  onSubmit: (e: React.FormEvent) => void
}

const markdownContent = `
# Proyecto Ipsum

## Descripción

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Instalación

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

\`\`\`bash
git clone https://github.com/usuario/proyecto-ipsum.git
cd proyecto-ipsum
npm install
\`\`\`
`

const FormLayout: React.FC<FormLayoutProps> = ({
  title,
  subtitle,
  photo,
  description,
  markdownContent: markdownContentProp,
  author,
  category,
  objectName,
  coordinates,
  rotationAngles,
  scale,
  file,
  onSubmit
}) => (
  <>
    <NavBar />
    <main className="flex flex-col items-center p-4 w-full overflow-hidden">
      <div className="flex w-full">
        {/* Columna izquierda: Formulario */}
        <div className="flex flex-col w-full md:w-1/5 p-4">
          <h2>Publicación</h2>
          <p>
            Llena el formulario a continuación para crear una nueva publicación.
          </p>
          <Form
            title={title}
            subtitle={subtitle}
            photo={photo}
            description={description}
            markdownContent={markdownContentProp}
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
            <ReactMarkdown className="prose prose-invert mt-6 text-black min-w-full">
              {markdownContent}
            </ReactMarkdown>
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

export default FormLayout
