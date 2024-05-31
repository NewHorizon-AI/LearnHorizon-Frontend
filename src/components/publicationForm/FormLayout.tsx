import React from 'react'
import Form from '@/components/publicationForm/Form'
import Upload from '@/components/publicationForm/Upload'
import Model3DInputs from './Model3DInputs'
import {
  type IPublicationFormProps,
  type IUploadProps,
  type IFile
} from '@/interfaces/formData/INewPublication'

interface FormLayoutProps extends IPublicationFormProps, IUploadProps, IFile {
  onSubmit: (e: React.FormEvent) => void
}

const FormLayout: React.FC<FormLayoutProps> = ({
  title,
  subtitle,
  photo,
  description,
  markdownContent,
  author,
  category,
  objectName,
  coordinates,
  rotationAngles,
  scale,
  file,
  onSubmit
}) => (
  <div className="max-w-md mx-auto mt-8 space-y-6">
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Publicación</h2>
      <p className="text-gray-500 dark:text-gray-400">
        Llena el formulario a continuación para crear una nueva publicación.
      </p>
    </div>
    <form onSubmit={onSubmit} className="space-y-4">
      <Form
        title={title}
        subtitle={subtitle}
        photo={photo}
        description={description}
        markdownContent={markdownContent}
        author={author}
        category={category}
      />
      <Upload file={file} />
      <Model3DInputs
        objectName={objectName}
        coordinates={coordinates}
        rotationAngles={rotationAngles}
        scale={scale}
      />
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Publicar
      </button>
    </form>
  </div>
)

export default FormLayout
