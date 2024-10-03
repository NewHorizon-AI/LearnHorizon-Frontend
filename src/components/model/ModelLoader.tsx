/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import type React from 'react'
import { useEffect } from 'react'
import type * as THREE from 'three'
import { GLTFLoader, type GLTF } from 'three-stdlib'

interface ModelLoaderProps {
  onModelLoad: (model: THREE.Group) => void
}

const ModelLoader: React.FC<ModelLoaderProps> = ({ onModelLoad }) => {
  useEffect(() => {
    const loader = new GLTFLoader()

    const handleLoad = (gltf: GLTF): void => {
      const model = gltf.scene
      model.position.set(0, 0, 0)
      model.rotation.set(Math.PI / 2, 0, 0)
      onModelLoad(model)
    }

    const handleProgress = (xhr: ProgressEvent<EventTarget>): void => {}

    const handleError = (error: ErrorEvent): void => {
      console.error('Error al cargar el modelo:', error)
    }

    loader.load('/model/modelo.gltf', handleLoad, handleProgress, handleError)
  }, [onModelLoad])

  return null
}

export default ModelLoader
