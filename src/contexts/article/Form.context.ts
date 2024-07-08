import { create } from 'zustand'
import { type IForm } from './interfaces/Form.interface'
import { handleSubmit } from './utils/Form.utils'

export const useFormStore = create<IForm>((set) => ({
  title: '',
  subtitle: 'DELETE',
  photo: '',
  description: '',
  author: [''],
  category: [''],
  markdownContent: '',
  isPreview: false,
  objectName: '',
  coordinates: [0, 0, 0],
  rotationAngles: [0, 0, 0],
  scale: [1, 1, 1],
  file: null,
  setField: (field, value) => {
    set((state) => ({ ...state, [field]: value }))
  },
  handleSubmit
}))
