'use client'

import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
import { OrbitControls } from 'three-stdlib'

const Home: React.FC = () => {
  useEffect(() => {
    // Configurar la escena
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff) // Fondo blanco

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 1.5, 3) // Ajustar la posición inicial de la cámara

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document
      .getElementById('modelo-container')
      ?.appendChild(renderer.domElement)

    // Configurar la iluminación
    const light = new THREE.AmbientLight(0x404040) // Luz suave
    scene.add(light)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5).normalize()
    scene.add(directionalLight)

    // Añadir controles orbitales con mayor libertad de movimiento y suavizado
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.screenSpacePanning = true
    controls.minDistance = 0.5
    controls.maxDistance = 50
    controls.maxPolarAngle = Math.PI // Permitir rotación vertical completa
    controls.minPolarAngle = 0 // Permitir rotación vertical completa
    controls.update()

    // Agregar una cuadrícula para el mapa
    const gridHelper = new THREE.GridHelper(10, 10)
    scene.add(gridHelper)

    // Agregar ejes fijos en el escenario
    const fixedAxesHelper = new THREE.AxesHelper(5)
    scene.add(fixedAxesHelper)

    let model: THREE.Group

    // Cargar el modelo glTF
    const loader = new GLTFLoader()
    loader.load('/model/modelo.gltf', (gltf) => {
      model = gltf.scene
      model.position.set(0, 0, 0) // Ajustar la posición inicial del modelo
      scene.add(model)

      // Agregar ejes que siguen al modelo
      const modelAxesHelper = new THREE.AxesHelper(3)
      model.add(modelAxesHelper)

      // Controles de movimiento
      const moveX = (direction: number) => {
        model.position.x += direction
      }

      const moveY = (direction: number) => {
        model.position.y += direction
      }

      const moveZ = (direction: number) => {
        model.position.z += direction
      }

      // Controles de rotación
      const rotateX = (angle: number) => {
        model.rotation.x += angle
      }

      const rotateY = (angle: number) => {
        model.rotation.y += angle
      }

      const rotateZ = (angle: number) => {
        model.rotation.z += angle
      }

      // Asignar eventos a los botones de movimiento
      document
        .getElementById('move-forward-x')
        ?.addEventListener('click', () => moveX(0.1))
      document
        .getElementById('move-backward-x')
        ?.addEventListener('click', () => moveX(-0.1))
      document
        .getElementById('move-up-y')
        ?.addEventListener('click', () => moveY(0.1))
      document
        .getElementById('move-down-y')
        ?.addEventListener('click', () => moveY(-0.1))
      document
        .getElementById('move-forward-z')
        ?.addEventListener('click', () => moveZ(0.1))
      document
        .getElementById('move-backward-z')
        ?.addEventListener('click', () => moveZ(-0.1))

      // Asignar eventos a los botones de rotación
      document
        .getElementById('rotate-left')
        ?.addEventListener('click', () => rotateY(-0.1))
      document
        .getElementById('rotate-right')
        ?.addEventListener('click', () => rotateY(0.1))
      document
        .getElementById('rotate-up')
        ?.addEventListener('click', () => rotateX(-0.1))
      document
        .getElementById('rotate-down')
        ?.addEventListener('click', () => rotateX(0.1))
      document
        .getElementById('rotate-clockwise')
        ?.addEventListener('click', () => rotateZ(0.1))
      document
        .getElementById('rotate-counterclockwise')
        ?.addEventListener('click', () => rotateZ(-0.1))
    })

    // Animar el modelo y la cámara
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Animación inicial
    let start = performance.now()
    const initialAnimation = (timestamp: number) => {
      const elapsed = timestamp - start
      camera.position.z = 3 + 1 * Math.sin(elapsed / 1000)
      controls.update()
      renderer.render(scene, camera)
      if (elapsed < 2000) {
        requestAnimationFrame(initialAnimation)
      }
    }
    requestAnimationFrame(initialAnimation)

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onWindowResize, false)

    return () => {
      window.removeEventListener('resize', onWindowResize)
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-screen">
      <div id="modelo-container" className="w-full h-full" />
      <div className="absolute top-4 left-4 space-y-2">
        <button
          id="move-forward-x"
          className="p-2 bg-gray-700 text-white rounded"
        >
          Avanzar en X
        </button>
        <button
          id="move-backward-x"
          className="p-2 bg-gray-700 text-white rounded"
        >
          Retroceder en X
        </button>
        <button id="move-up-y" className="p-2 bg-gray-700 text-white rounded">
          Subir en Y
        </button>
        <button id="move-down-y" className="p-2 bg-gray-700 text-white rounded">
          Bajar en Y
        </button>
        <button
          id="move-forward-z"
          className="p-2 bg-gray-700 text-white rounded"
        >
          Avanzar en Z
        </button>
        <button
          id="move-backward-z"
          className="p-2 bg-gray-700 text-white rounded"
        >
          Retroceder en Z
        </button>
      </div>
      <div className="absolute top-4 right-4 space-y-2">
        <button id="rotate-left" className="p-2 bg-gray-700 text-white rounded">
          Rotar Izquierda
        </button>
        <button
          id="rotate-right"
          className="p-2 bg-gray-700 text-white rounded"
        >
          Rotar Derecha
        </button>
        <button id="rotate-up" className="p-2 bg-gray-700 text-white rounded">
          Rotar Arriba
        </button>
        <button id="rotate-down" className="p-2 bg-gray-700 text-white rounded">
          Rotar Abajo
        </button>
        <button
          id="rotate-clockwise"
          className="p-2 bg-gray-700 text-white rounded"
        >
          Rotar Horario
        </button>
        <button
          id="rotate-counterclockwise"
          className="p-2 bg-gray-700 text-white rounded"
        >
          Rotar Anti-Horario
        </button>
      </div>
    </div>
  )
}

export default Home
