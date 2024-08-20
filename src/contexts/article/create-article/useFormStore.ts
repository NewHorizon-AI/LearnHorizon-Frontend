import { create } from 'zustand'
import { type IForm } from './interfaces/IForm'
import { handleSubmit } from './utils/useFormStore.utils'

const useFormStore = create<IForm>((set) => ({
  title: '',
  photo: '',
  description: '',
  author: [''],
  category: [''],
  markdownContent: '',
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

export default useFormStore
