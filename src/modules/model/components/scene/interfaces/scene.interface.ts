export interface CustomSceneConfigProps {
  backgroundColor?: string // Color de fondo en formato hexadecimal
  size?: number // Tamaño de la grilla
  divisions?: number // Número de divisiones de la grilla
  activarEjes?: {
    // Activación de los ejes
    X?: boolean
    Y?: boolean
    Z?: boolean
  }
  gridVisible?: boolean // Si la grilla está visible o no
  axisColors?: {
    // Colores de los ejes en formato hexadecimal
    X?: string
    Y?: string
    Z?: string
  }
  gridPosition?: {
    // Posición de la grilla en el espacio 3D
    x?: number
    y?: number
    z?: number
  }
  gridRotation?: {
    // Rotación de la grilla en grados o radianes, dependiendo de cómo lo uses
    x?: number
    y?: number
    z?: number
  }
  gridOpacity?: number // Nivel de opacidad de la grilla (0 a 1)
}

// TODO: Separar esta interfaz segun corresponda para cada configuracion especifica
// * Exaaample: Interfaz para el fondo, otra para la grilla base, otra para el plano cartesiano, etc.
export interface SceneConfigProps {
  backgroundColor: string // Color de fondo en formato hexadecimal
  size: number // Tamaño de la grilla
  divisions: number // Número de divisiones de la grilla
  activarEjes: {
    // Activación de los ejes
    X: boolean
    Y: boolean
    Z: boolean
  }
  gridVisible: boolean // Si la grilla está visible o no
  axisColors: {
    // Colores de los ejes en formato hexadecimal
    X: string
    Y: string
    Z: string
  }
  gridPosition: {
    // Posición de la grilla en el espacio 3D
    x: number
    y: number
    z: number
  }
  gridRotation: {
    // Rotación de la grilla en grados o radianes, dependiendo de cómo lo uses
    x: number
    y: number
    z: number
  }
  gridOpacity: number // Nivel de opacidad de la grilla (0 a 1)
}
