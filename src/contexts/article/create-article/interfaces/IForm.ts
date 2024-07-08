export interface IForm {
  title: string
  subtitle: string
  photo: string
  description: string
  author: string[]
  category: string[]
  markdownContent: string
  objectName: string
  coordinates: [number, number, number]
  rotationAngles: [number, number, number]
  scale: [number, number, number]
  file: File | null
  setField: (field: string, value: any) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
}
