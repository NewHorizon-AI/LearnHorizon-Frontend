/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

import * as COMPONENTS from '../components/index'

import LoadingScreen from '@/components/loading/LoadingScreen'
import { Button } from '@/components/ui/button'

// * Importar datos de ejemplo para la camara
import cameraData from '@/data/model/camera/camera.example.json'

interface ThreeModelProps {
  model: ArrayBuffer | undefined
}

const ThreeModel: React.FC<ThreeModelProps> = ({ model }) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showControlPanel, setShowControlPanel] = useState<boolean>(false)
  const [cameraPosition, setCameraPosition] = useState<THREE.Vector3>(
    new THREE.Vector3()
  )
  const [modelPosition, setModelPosition] = useState<THREE.Vector3>(
    new THREE.Vector3()
  )

  // Usar useRef para los controladores
  const cameraControllerRef = useRef<COMPONENTS.CameraController | null>(null)
  const modelControllerRef = useRef<COMPONENTS.ModelController | null>(null)

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

      scene = COMPONENTS.CreateScene()

      // ! Crear la cámara, el renderizador y los controles.
      // TODO: Reemplazar por los datos de la cámara obtenidos de la API
      cameraData.height = height
      cameraData.width = width

      camera = COMPONENTS.CreateCamera(cameraData)
      renderer = COMPONENTS.CreateRenderer(width, height)
      mountRef.current.appendChild(renderer.domElement)

      COMPONENTS.AddLights(scene)
      controls = COMPONENTS.CreateControls(camera, renderer)

      // Asignar el cameraController a la referencia
      cameraControllerRef.current = new COMPONENTS.CameraController(camera)
      setCameraPosition(camera.position.clone())

      try {
        const loadedModel = await COMPONENTS.LoadModel(model)
        scene.add(loadedModel)

        const helper = new THREE.BoxHelper(loadedModel, 0xff0000)
        scene.add(helper)

        // Asignar el modelController a la referencia
        modelControllerRef.current = new COMPONENTS.ModelController(loadedModel)
        setModelPosition(loadedModel.position.clone())

        setIsLoading(false)

        const animate = () => {
          animationId = requestAnimationFrame(animate)
          controls.update()
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

  const handleCameraChange = (position: THREE.Vector3) => {
    setCameraPosition(position)
    if (cameraControllerRef.current) {
      cameraControllerRef.current.setPosition(
        position.x,
        position.y,
        position.z
      )
    }
  }

  const handleModelChange = (position: THREE.Vector3) => {
    setModelPosition(position)
    if (modelControllerRef.current) {
      modelControllerRef.current.setPosition(position.x, position.y, position.z)
    }
  }

  return (
    <div className="w-full h-full flex relative">
      <div ref={mountRef} className="flex-1">
        {isLoading && (
          <LoadingScreen
            message="Cargando modelo 3D..."
            spinnerSize="lg"
            bgColor="bg-gray-100"
            textColor="text-gray-800"
          />
        )}
      </div>
      {/* Botón para mostrar/ocultar el panel */}
      <div className="absolute top-4 right-4">
        <Button
          onClick={() => {
            setShowControlPanel(!showControlPanel)
          }}
        >
          {showControlPanel ? 'Ocultar Controles' : 'Mostrar Controles'}
        </Button>
      </div>
      {/* Panel de control */}
      {showControlPanel && (
        <div className="w-64">
          <COMPONENTS.ControlPanel
            cameraPosition={cameraPosition}
            modelPosition={modelPosition}
            onCameraChange={handleCameraChange}
            onModelChange={handleModelChange}
          />
        </div>
      )}
    </div>
  )
}

export default ThreeModel
