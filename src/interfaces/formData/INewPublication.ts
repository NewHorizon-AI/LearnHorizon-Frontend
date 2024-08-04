// Interfaz genérica para manejar estado y setter
export interface StateHandler<T> {
  value: T
  setValue: (value: T) => void
}

export interface IPublicationFormProps {
  title: StateHandler<string>
  subtitle: StateHandler<string>
  photo: StateHandler<string>
  description: StateHandler<string>
  author: StateHandler<string[]>
  category: StateHandler<string[]>
}

export interface IMarkdownFormProps {
  markdownContent: StateHandler<string>
  isPreview: StateHandler<boolean>
}

export interface IUploadProps {
  objectName: StateHandler<string>
  coordinates: StateHandler<[number, number, number]>
  rotationAngles: StateHandler<[number, number, number]>
  scale: StateHandler<[number, number, number]>
}

export interface IFile {
  file: StateHandler<File | null | undefined>
}

export interface IArticleDataProps
  extends IPublicationFormProps,
    IMarkdownFormProps,
    IUploadProps,
    IFile {}

export interface IArticleSubmitProps {
  onSubmit: (e: React.FormEvent) => void
}
