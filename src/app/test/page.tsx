/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'

import React, { useState, useCallback, useEffect } from 'react'
import type * as THREE from 'three'
import Scene from '@/components/model/Scene'
import Controls from '@/components/model/Controls'
import ModelLoader from '@/components/model/ModelLoader'
import Buttons from '@/components/model/Buttons'
import CoordinatesDisplay from '@/components/ui/CoordinatesDisplay'

const Home: React.FC = () => {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null)
  const [model, setModel] = useState<THREE.Group | null>(null)
  const [frame, setFrame] = useState(0) // Estado para forzar la actualización del componente

  const handleSceneSetup = useCallback(
    (camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer): void => {
      setCamera(camera)
      setRenderer(renderer)
    },
    []
  )

  const handleModelLoad = useCallback((model: THREE.Group): void => {
    setModel(model)
  }, [])

  const handleMove = (axis: 'x' | 'y' | 'z', direction: number): void => {
    if (model !== null) {
      model.position[axis] += direction
    }
  }

  const handleRotate = (axis: 'x' | 'y' | 'z', angle: number): void => {
    if (model !== null) {
      model.rotation[axis] += angle
    }
  }

  useEffect(() => {
    const animate = (): void => {
      requestAnimationFrame(animate)
      setFrame((prev) => prev + 1) // Actualiza el estado en cada frame
    }
    animate()
  }, [])

  return (
    <div className="w-full h-full">
      <Scene onSceneSetup={handleSceneSetup} model={model ?? undefined} />
      {camera !== null && renderer !== null ? (
        <Controls camera={camera} renderer={renderer} />
      ) : null}
      <ModelLoader onModelLoad={handleModelLoad} />
      <Buttons onMove={handleMove} onRotate={handleRotate} />
      <CoordinatesDisplay
        model={model}
        frame={frame}
        onPositionChange={function (
          axis: 'x' | 'y' | 'z',
          value: number
        ): void {
          throw new Error('Function not implemented.')
        }}
        onRotationChange={function (
          axis: 'x' | 'y' | 'z',
          value: number
        ): void {
          throw new Error('Function not implemented.')
        }}
      />{' '}
      {/* Pasa el estado del frame a CoordinatesDisplay */}
    </div>
  )
}

export default Home
