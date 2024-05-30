// Interfaz genérica para manejar estado y setter
interface StateHandler<T> {
  value: T
  setValue: (value: T) => void
}

export interface IPublicationFormProps {
  title: StateHandler<string>
  subtitle: StateHandler<string>
  photo: StateHandler<string>
  description: StateHandler<string>
  markdownContent: StateHandler<string>
  author: StateHandler<string>
  category: StateHandler<string>
}

export interface IUploadProps {
  objectName: StateHandler<string>
  coordinates: StateHandler<[number, number, number]>
  rotationAngles: StateHandler<[number, number, number]>
  scale: StateHandler<[number, number, number]>
}

export interface IFile {
  file: StateHandler<File | null>
}
