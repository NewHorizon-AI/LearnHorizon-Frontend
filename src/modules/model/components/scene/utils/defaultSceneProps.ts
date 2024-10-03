import { type SceneConfigProps } from '../interfaces/scene.interface'

const defaultSceneConfig: SceneConfigProps = {
  backgroundColor: '#ffffff',
  size: 30,
  divisions: 1,
  activarEjes: {
    X: true,
    Y: false,
    Z: true
  },
  gridVisible: true,
  axisColors: {
    X: '#ff0000', // Rojo para el eje X
    Y: '#00ff00', // Verde para el eje Y
    Z: '#0000ff' // Azul para el eje Z
  },
  gridPosition: {
    x: 0,
    y: 0,
    z: 0
  },
  gridRotation: {
    x: 0,
    y: 0,
    z: 0
  },
  gridOpacity: 1.0
}

export default defaultSceneConfig
