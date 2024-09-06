'use client'

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

interface ThreeModelProps {
  modelData: ArrayBuffer // Ahora pasamos el archivo como un ArrayBuffer
}

const ThreeModel: React.FC<ThreeModelProps> = ({ modelData }) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!modelData || modelData.byteLength === 0) {
      console.error('Error: modelData está vacío o es inválido.')
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

    renderer.setSize(
      mountRef.current?.clientWidth || window.innerWidth,
      mountRef.current?.clientHeight || window.innerHeight
    )
    renderer.setPixelRatio(window.devicePixelRatio) // Asegura que la resolución sea buena

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

    // Cargar el modelo GLTF desde el ArrayBuffer utilizando GLTFLoader.parse()
    const loadModel = () => {
      const loader = new GLTFLoader()

      loader.parse(
        modelData, // El archivo binario (ArrayBuffer)
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
        },
        (error) => {
          console.error('Error al parsear el modelo:', error)
        }
      )
    }

    // Llamada para cargar el modelo
    loadModel()

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    // Redimensionar el renderer si cambia el tamaño de la ventana
    const handleResize = () => {
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
  }, [modelData]) // El useEffect dependerá de modelData para recargar el modelo si cambia

  return <div ref={mountRef} className="w-full h-full" /> // Tailwind CSS aplicado para ajustar el contenedor y fondo blanco
}

export default ThreeModel
