export interface CustomTransformationProps {
  position?: {
    x?: number
    y?: number
    z?: number
  }
  rotation?: {
    x?: number
    y?: number
    z?: number
  }
  scale?: {
    x?: number
    y?: number
    z?: number
  }
}

export interface TransformationProps {
  position: {
    x: number
    y: number
    z: number
  }
  rotation: {
    x: number
    y: number
    z: number
  }
  scale: {
    x: number
    y: number
    z: number
  }
}
