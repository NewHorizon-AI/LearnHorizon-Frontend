import { useReducer } from 'react'

interface FormState {
  title: string
  subtitle: string
  photo: string
  description: string
  author: string[]
  category: string[]
  markdownContent: string
  isPreview: boolean
  objectName: string
  coordinates: [number, number, number]
  rotationAngles: [number, number, number]
  scale: [number, number, number]
}

type FormAction =
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'SET_SUBTITLE'; payload: string }
  | { type: 'SET_PHOTO'; payload: string }
  | { type: 'SET_DESCRIPTION'; payload: string }
  | { type: 'SET_AUTHOR'; payload: string[] }
  | { type: 'SET_CATEGORY'; payload: string[] }
  | { type: 'SET_MARKDOWN_CONTENT'; payload: string }
  | { type: 'SET_IS_PREVIEW'; payload: boolean }
  | { type: 'SET_OBJECT_NAME'; payload: string }
  | { type: 'SET_COORDINATES'; payload: [number, number, number] }
  | { type: 'SET_ROTATION_ANGLES'; payload: [number, number, number] }
  | { type: 'SET_SCALE'; payload: [number, number, number] }

const initialState: FormState = {
  title: '',
  subtitle: '',
  photo: '',
  description: '',
  author: [],
  category: [],
  markdownContent: '',
  isPreview: false,
  objectName: '',
  coordinates: [0, 0, 0],
  rotationAngles: [0, 0, 0],
  scale: [1, 1, 1]
}

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload }
    case 'SET_SUBTITLE':
      return { ...state, subtitle: action.payload }
    case 'SET_PHOTO':
      return { ...state, photo: action.payload }
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload }
    case 'SET_AUTHOR':
      return { ...state, author: action.payload }
    case 'SET_CATEGORY':
      return { ...state, category: action.payload }
    case 'SET_MARKDOWN_CONTENT':
      return { ...state, markdownContent: action.payload }
    case 'SET_IS_PREVIEW':
      return { ...state, isPreview: action.payload }
    case 'SET_OBJECT_NAME':
      return { ...state, objectName: action.payload }
    case 'SET_COORDINATES':
      return { ...state, coordinates: action.payload }
    case 'SET_ROTATION_ANGLES':
      return { ...state, rotationAngles: action.payload }
    case 'SET_SCALE':
      return { ...state, scale: action.payload }
    default:
      return state
  }
}

interface UseFormState {
  state: FormState
  setTitle: (title: string) => void
  setSubtitle: (subtitle: string) => void
  setPhoto: (photo: string) => void
  setDescription: (description: string) => void
  setAuthor: (author: string[]) => void
  setCategory: (category: string[]) => void
  setMarkdownContent: (markdownContent: string) => void
  setIsPreview: (isPreview: boolean) => void
  setObjectName: (objectName: string) => void
  setCoordinates: (coordinates: [number, number, number]) => void
  setRotationAngles: (rotationAngles: [number, number, number]) => void
  setScale: (scale: [number, number, number]) => void
}

export default function useFormState(): UseFormState {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const setTitle = (title: string): void => {
    dispatch({ type: 'SET_TITLE', payload: title })
  }
  const setSubtitle = (subtitle: string): void => {
    dispatch({ type: 'SET_SUBTITLE', payload: subtitle })
  }
  const setPhoto = (photo: string): void => {
    dispatch({ type: 'SET_PHOTO', payload: photo })
  }
  const setDescription = (description: string): void => {
    dispatch({ type: 'SET_DESCRIPTION', payload: description })
  }
  const setAuthor = (author: string[]): void => {
    dispatch({ type: 'SET_AUTHOR', payload: author })
  }
  const setCategory = (category: string[]): void => {
    dispatch({ type: 'SET_CATEGORY', payload: category })
  }
  const setMarkdownContent = (markdownContent: string): void => {
    dispatch({ type: 'SET_MARKDOWN_CONTENT', payload: markdownContent })
  }
  const setIsPreview = (isPreview: boolean): void => {
    dispatch({ type: 'SET_IS_PREVIEW', payload: isPreview })
  }
  const setObjectName = (objectName: string): void => {
    dispatch({ type: 'SET_OBJECT_NAME', payload: objectName })
  }
  const setCoordinates = (coordinates: [number, number, number]): void => {
    dispatch({ type: 'SET_COORDINATES', payload: coordinates })
  }
  const setRotationAngles = (
    rotationAngles: [number, number, number]
  ): void => {
    dispatch({ type: 'SET_ROTATION_ANGLES', payload: rotationAngles })
  }
  const setScale = (scale: [number, number, number]): void => {
    dispatch({ type: 'SET_SCALE', payload: scale })
  }

  return {
    state,
    setTitle,
    setSubtitle,
    setPhoto,
    setDescription,
    setAuthor,
    setCategory,
    setMarkdownContent,
    setIsPreview,
    setObjectName,
    setCoordinates,
    setRotationAngles,
    setScale
  }
}
