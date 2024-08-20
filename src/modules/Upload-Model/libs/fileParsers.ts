// Función para verificar si el archivo no es nulo
export const isFileSelected = (file: any): boolean => {
  return file !== null
}

// Función para verificar el tipo de archivo
export const isValidFileType = (file: any): boolean => {
  return file.type === 'model/gltf+json' || file.name.endsWith('.gltf')
}
