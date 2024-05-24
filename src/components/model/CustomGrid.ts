import * as THREE from 'three'
import React, { useEffect } from 'react'

interface CustomGridProps {
  size: number
  divisions: number
  colorCenterLine: THREE.Color | string | number
  colorGrid: THREE.Color | string | number
  scene: THREE.Scene
}

const CustomGrid: React.FC<CustomGridProps> = ({
  size,
  divisions,
  colorCenterLine,
  colorGrid,
  scene
}) => {
  useEffect(() => {
    const halfSize = size / 2
    const step = size / divisions
    const vertices: number[] = []
    const colors: number[] = []

    const color1 = new THREE.Color(colorGrid)
    const color2 = new THREE.Color(colorCenterLine)

    for (let i = 0; i <= divisions; i++) {
      const k = -halfSize + i * step
      // Líneas paralelas al eje X
      vertices.push(-halfSize, 0, k, halfSize, 0, k)
      colors.push(color1.r, color1.g, color1.b, color1.r, color1.g, color1.b)

      // Líneas paralelas al eje Z
      vertices.push(k, 0, -halfSize, k, 0, halfSize)
      colors.push(color1.r, color1.g, color1.b, color1.r, color1.g, color1.b)
    }

    // Añadir las líneas centrales en color diferente
    vertices.push(-halfSize, 0, 0, halfSize, 0, 0)
    colors.push(color2.r, color2.g, color2.b, color2.r, color2.g, color2.b)
    vertices.push(0, 0, -halfSize, 0, 0, halfSize)
    colors.push(color2.r, color2.g, color2.b, color2.r, color2.g, color2.b)

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    )
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      depthTest: true,
      depthWrite: true,
      transparent: false
    })

    const lineSegments = new THREE.LineSegments(geometry, material)
    scene.add(lineSegments)

    return () => {
      scene.remove(lineSegments)
      geometry.dispose()
      material.dispose()
    }
  }, [size, divisions, colorCenterLine, colorGrid, scene])

  return null
}

export default CustomGrid
