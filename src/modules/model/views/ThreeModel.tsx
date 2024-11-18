/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

import LoadingScreen from '@/components/loading/LoadingScreen'

// * Importar datos de ejemplo
import cameraData from '@/data/model/camera/camera.example.json'
import SceneData from '@/data/model/scene/scene-grid-settings.example.json'

import { type ModelViewProps } from '../interfaces/model.interface'

// * Importar componentes
import { CreatePerspectiveCamera, CameraController } from '../components/camera'
import { OrbitControlManager } from '../components/controls'
import {
  ModelController,
  LoadAndTransformModel,
  ApplyTransformations
} from '../components/model'
import { SetupScene } from '../components/scene'
import { SetupRenderer } from '../components/renderer'

import useEditArticleStore from '@/contexts/article/get'

import centerPivot from '../components/model/utils/centerPivot'

const ModelView: React.FC<ModelViewProps> = (props) => {
  const { model, sceneSettings } = props
  const { article } = useEditArticleStore()

  if (article == null) {
    return (
      <div>
        <h1>Article not found</h1>
      </div>
    )
  }

  const mountRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [cameraPosition, setCameraPosition] = useState<THREE.Vector3>(
    new THREE.Vector3()
  )
  const [modelPosition, setModelPosition] = useState<THREE.Vector3>(
    new THREE.Vector3()
  )

  // Usar useRef para los controladores
  const cameraControllerRef = useRef<CameraController | null>(null)
  const modelControllerRef = useRef<ModelController | null>(null)

  const transformations = article?.sceneSettings.transformationsSettings

  useEffect(() => {
    if (!model || model.byteLength === 0) {
      console.error('Error: el modelo está vacío o es inválido.')
      setIsLoading(false)
      return
    }

    let renderer: THREE.WebGLRenderer
    let animationId: number
    let camera: THREE.PerspectiveCamera
    let scene: THREE.Scene
    let controls: any

    const init = async () => {
      if (!mountRef.current) return

      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight

      scene = SetupScene(SceneData)

      // ! Crear la cámara, el renderizador y los controles.
      // TODO: Reemplazar por los datos de la cámara obtenidos de la API
      cameraData.height = height
      cameraData.width = width

      renderer = SetupRenderer(width, height)

      const clock = new THREE.Clock()

      camera = CreatePerspectiveCamera(cameraData)

      mountRef.current.appendChild(renderer.domElement)

      controls = OrbitControlManager(camera, renderer)

      // AddLights(scene)

      // Asignar el cameraController a la referencia
      cameraControllerRef.current = new CameraController(camera)
      setCameraPosition(camera.position.clone())

      try {
        const loadedModel = await LoadAndTransformModel(
          model,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          article.sceneSettings.transformationsSettings
        )

        centerPivot(loadedModel.position)
        scene.add(loadedModel)

        // const helper = new THREE.BoxHelper(loadedModel, 0xff0000)
        // scene.add(helper)

        // Asignar el modelController a la referencia
        modelControllerRef.current = new ModelController(loadedModel)
        setModelPosition(loadedModel.position.clone())

        ApplyTransformations(
          modelControllerRef.current.getModel(),
          transformations
        )

        setIsLoading(false)

        const animate = () => {
          const delta = clock.getDelta()

          animationId = requestAnimationFrame(animate)

          controls.update(delta)
          renderer.render(scene, camera)
        }
        animate()
      } catch (error) {
        console.error('Error al cargar el modelo:', error)
        setIsLoading(false)
      }
    }

    init()

    const handleResize = () => {
      if (mountRef.current && renderer && camera) {
        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationId) cancelAnimationFrame(animationId)
      if (renderer && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
        renderer.dispose()
      }
      if (modelControllerRef.current) {
        modelControllerRef.current.dispose()
        modelControllerRef.current = null
      }
      if (cameraControllerRef.current) {
        // Si tienes una función de limpieza en CameraController
        // cameraControllerRef.current.dispose();
        cameraControllerRef.current = null
      }
    }
  }, [model])

  // Efecto que se ejecuta cuando el artículo cambia, para aplicar transformaciones
  useEffect(() => {
    if (modelControllerRef.current && article) {
      const transformations = article.sceneSettings.transformationsSettings
      ApplyTransformations(
        modelControllerRef.current.getModel(),
        transformations
      )
    }
  }, [article, model]) // Escucha cambios en el artículo

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="w-full h-full">
        {isLoading && (
          <LoadingScreen
            message="Cargando modelo 3D..."
            spinnerSize="lg"
            bgColor="bg-gray-100"
            textColor="text-gray-800"
          />
        )}
      </div>
    </div>
  )
}

export default ModelView
