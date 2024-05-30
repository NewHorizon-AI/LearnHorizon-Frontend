import React from 'react'
import Form from '@/components/publicationForm/Form'
import Upload from '@/components/publicationForm/Upload'
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
  <div>
    <form onSubmit={onSubmit}>
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
      <div>
        <label>Nombre del Modelo 3D:</label>
        <input
          type="text"
          value={objectName.value}
          onChange={(e) => {
            objectName.setValue(e.target.value)
          }}
        />
        <label>Coordenadas:</label>
        {['X', 'Y', 'Z'].map((axis, index) => (
          <input
            key={axis}
            type="number"
            value={coordinates.value[index]}
            onChange={(e) => {
              const newValue = [...coordinates.value] as [
                number,
                number,
                number
              ]
              newValue[index] = parseFloat(e.target.value)
              coordinates.setValue(newValue)
            }}
          />
        ))}
        <label>Ángulos de Rotación:</label>
        {['X', 'Y', 'Z'].map((axis, index) => (
          <input
            key={axis}
            type="number"
            value={rotationAngles.value[index]}
            onChange={(e) => {
              const newValue = [...rotationAngles.value] as [
                number,
                number,
                number
              ]
              newValue[index] = parseFloat(e.target.value)
              rotationAngles.setValue(newValue)
            }}
          />
        ))}
        <label>Escala:</label>
        {['X', 'Y', 'Z'].map((axis, index) => (
          <input
            key={axis}
            type="number"
            value={scale.value[index]}
            onChange={(e) => {
              const newValue = [...scale.value] as [number, number, number]
              newValue[index] = parseFloat(e.target.value)
              scale.setValue(newValue)
            }}
          />
        ))}
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Publicar
      </button>
    </form>
  </div>
)

export default FormLayout
