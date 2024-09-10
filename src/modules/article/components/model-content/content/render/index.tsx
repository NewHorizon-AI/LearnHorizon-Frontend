'use client'

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import LoadingScreen from '@/components/loading/LoadingScreen'

interface ThreeModelProps {
  model: ArrayBuffer | undefined
}

const ThreeModel: React.FC<ThreeModelProps> = ({ model }) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true) // Estado para manejar la pantalla de carga

  useEffect(() => {
    if (!model || model.byteLength === 0) {
      console.error('Error: model está vacío o es inválido.')

      setIsLoading(false)
      return
    }

    // Configurar la escena, cámara y renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current
        ? mountRef.current.clientWidth / mountRef.current.clientHeight
        : window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    if (mountRef.current) {
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    renderer.setSize(
      mountRef.current?.clientWidth ?? window.innerWidth,
      mountRef.current?.clientHeight ?? window.innerHeight
    )
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement)
    }

    // Añadir luz a la escena
    const ambientLight = new THREE.AmbientLight(0xffffff, 2)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.update()

    // Configurar la cámara
    camera.position.z = 5

    // Cargar el modelo GLTF desde el IModel | undefined utilizando GLTFLoader.parse()
    const loadModel = (): void => {
      const loader = new GLTFLoader()

      loader.parse(
        model,
        '', // La URL base (dejamos vacía porque ya tenemos el archivo)
        (gltf) => {
          const model = gltf.scene

          // Ajustar la escala si es necesario
          model.scale.set(1, 1, 1) // Cambia los valores según sea necesario

          // Ajustar la posición si es necesario
          model.position.set(0, 0, 0) // Cambia la posición según sea necesario

          const helper = new THREE.BoxHelper(gltf.scene, 0xff0000)
          scene.add(helper)

          scene.add(model) // Añadir el modelo a la escena
          animate() // Iniciar la animación
          setIsLoading(false) // Deja de cargar cuando el modelo está listo
        },
        (error) => {
          console.error('Error al parsear el modelo:', error)
          setIsLoading(false) // Deja de cargar si hay un error
        }
      )
    }

    // Llamada para cargar el modelo
    loadModel()

    const animate = (): void => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    // Redimensionar el renderer si cambia el tamaño de la ventana
    const handleResize = (): void => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }
    }

    window.addEventListener('resize', handleResize)

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [model]) // El useEffect dependerá de model para recargar el modelo si cambia

  return (
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
  )
}

export default ThreeModel
