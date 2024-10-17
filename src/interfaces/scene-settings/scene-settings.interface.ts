// Interfaz para la posición y rotación en tres dimensiones
export interface IVector3 {
  x: number
  y: number
  z: number
}

// Interfaz para las configuraciones de la cámara
export interface ICameraSettings {
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

// Interfaz para las configuraciones de la cuadrícula
export interface IGridSettings {
  _id: string
  backgroundColor: string
  size: number
  divisions: number
  activarEjes: string
  gridVisible: boolean
  gridOpacity: number
  __v: number
}

// Interfaz para las configuraciones del modelo
export interface IModelSettings {
  _id: string
  visible: boolean
  __v: number
}

// Interfaz para las configuraciones de las transformaciones
export interface ITransformationsSettings {
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
