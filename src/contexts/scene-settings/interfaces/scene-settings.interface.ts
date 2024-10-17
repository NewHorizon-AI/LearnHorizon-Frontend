// Interfaz para la posición y rotación en tres dimensiones
interface IVector3 {
  x: number
  y: number
  z: number
}

// Interfaz para las configuraciones de la cámara
interface ICameraSettings {
  _id: string
  fov: number
  near: number
  far: number
  position: IVector3
  lookAt: IVector3
  rotation: IVector3
  cameraType: string
  __v: number
}

// Interfaz para los colores de los ejes
interface IAxisColors {
  X: string
  Y: string
  Z: string
}

// Interfaz para las configuraciones de la cuadrícula
interface IGridSettings {
  _id: string
  backgroundColor: string
  size: number
  divisions: number
  activarEjes: string
  gridVisible: boolean
  axisColors: IAxisColors
  gridPosition: IVector3
  gridRotation: IVector3
  gridOpacity: number
  __v: number
}

// Interfaz para las configuraciones del modelo
interface IModelSettings {
  _id: string
  visible: boolean
  __v: number
}

// Interfaz para las configuraciones de las transformaciones
interface ITransformationsSettings {
  _id: string
  scale: number[]
  rotation: number[]
  position: number[]
  __v: number
}

// Interfaz principal para las configuraciones de la escena
export interface ISceneSettings {
  _id: string
  cameraSettings: ICameraSettings
  gridSettings: IGridSettings
  modelSettings: IModelSettings
  transformationsSettings: ITransformationsSettings
  __v: number
}
