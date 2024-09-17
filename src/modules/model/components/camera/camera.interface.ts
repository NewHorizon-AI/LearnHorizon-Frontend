export interface CameraProps {
  width: number // Ancho del viewport
  height: number // Alto del viewport
  fov?: number // Campo de visión (por defecto 75)
  near?: number // Distancia mínima de renderizado (por defecto 0.1)
  far?: number // Distancia máxima de renderizado (por defecto 1000)
  position?: {
    x?: number // Posición en el eje X (por defecto 0)
    y?: number // Posición en el eje Y (por defecto 0)
    z?: number // Posición en el eje Z (por defecto 0)
  }
  rotation?: {
    x?: number // Rotación en el eje X (por defecto 0)
    y?: number // Rotación en el eje Y (por defecto 0)
    z?: number // Rotación en el eje Z (por defecto 0)
  }
  lookAt?: {
    x?: number // Coordenada X para el `lookAt` (por defecto 0)
    y?: number // Coordenada Y para el `lookAt` (por defecto 0)
    z?: number // Coordenada Z para el `lookAt` (por defecto 0)
  }
}
