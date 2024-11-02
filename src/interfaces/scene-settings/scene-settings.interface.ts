// Interfaz para las configuraciones de la cámara
export interface ICameraSettings {
  _id: string
  fov: number
  near: number
  far: number
  position: number[] // Cambiado a array de números
  lookAt: number[] // Cambiado a array de números
  rotation: number[] // Cambiado a array de números
  cameraType: string
}

// Interfaz para las configuraciones de la cuadrícula
export interface IGridSettings {
  _id: string
  backgroundColor: string
  size: number
  divisions: number
  gridVisible: boolean
  gridOpacity: number
}

// Interfaz para las configuraciones del modelo
export interface IModelSettings {
  _id: string
  visible: boolean
}

// Interfaz para las configuraciones de las transformaciones
export interface ITransformationsSettings {
  _id?: string
  scale: string[] // Cambiado a array de números
  rotation: string[] // Cambiado a array de números
  position: string[] // Cambiado a array de números
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
