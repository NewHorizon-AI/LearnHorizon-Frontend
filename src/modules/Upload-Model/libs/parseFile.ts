import { isFileSelected, isValidFileType } from './fileParsers'

import { type FileValidationResult } from '../interfaces/IFileValidation'

export const parseFile = (file: any): FileValidationResult => {
  if (file === null) {
    return {
      valid: false,
      alert: {
        title: 'Error!',
        description: 'No se ha seleccionado ningún archivo.',
        variant: 'destructive'
      }
    }
  }
  if (!isFileSelected(file)) {
    return {
      valid: false,
      alert: {
        title: 'Error!',
        description: 'No se ha seleccionado ningún archivo.',
        variant: 'destructive'
      }
    }
  }

  if (!isValidFileType(file)) {
    return {
      valid: false,
      alert: {
        title: 'Error!',
        description: 'Solo se aceptan archivos en formato .gltf',
        variant: 'destructive'
      }
    }
  }

  return {
    valid: true,
    alert: {
      title: 'Success!',
      description: 'Archivo cargado correctamente.',
      variant: 'default'
    }
  }
}

export default parseFile
