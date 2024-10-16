/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { OrbitControls } from 'three-stdlib'
import * as THREE from 'three'

interface ControlsProps {
  camera: THREE.PerspectiveCamera | null | undefined
  renderer: THREE.WebGLRenderer | null | undefined
}

const Controls: React.FC<ControlsProps> = ({ camera, renderer }) => {
  useEffect(() => {
    if (camera == null || renderer == null) return

    const controls = new OrbitControls(camera, renderer.domElement)

    // Configuración básica de los controles
    controls.enableDamping = true // Habilita amortiguamiento para movimientos suaves
    controls.dampingFactor = 0.1 // Factor de amortiguamiento
    controls.screenSpacePanning = false // Desactiva paneo en espacio de pantalla (activado en espacio del mundo)
    controls.minDistance = 0.5 // Distancia mínima de zoom
    controls.maxDistance = 10 // Distancia máxima de zoom
    controls.maxPolarAngle = Math.PI / 2 // Ángulo polar máximo (90 grados)
    controls.minPolarAngle = 0 // Ángulo polar mínimo (0 grados)
    controls.maxAzimuthAngle = Infinity // Ángulo azimutal máximo
    controls.minAzimuthAngle = -Infinity // Ángulo azimutal mínimo

    // Configuración de botones del mouse
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE, // Clic izquierdo para rotar
      MIDDLE: THREE.MOUSE.DOLLY, // Clic de la rueda del mouse para hacer zoom
      RIGHT: THREE.MOUSE.PAN // Clic derecho para panear
    }
    // Animación y actualización de controles
    const animate = (): void => {
      requestAnimationFrame(animate)
      controls.update() // Actualizar los controles para aplicar amortiguamiento y cambios
    }
    animate()

    return () => {
      controls.dispose() // Limpiar recursos cuando el componente se desmonta
    }
  }, [camera, renderer])

  return null
}

export default Controls
