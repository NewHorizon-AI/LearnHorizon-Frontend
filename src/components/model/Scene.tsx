/* eslint-disable react/prop-types */
import { useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'

interface SceneProps {
  onSceneSetup: (
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
  ) => void
  model?: THREE.Group
}

const Scene: React.FC<SceneProps> = ({ onSceneSetup, model }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene())
  const modelRef = useRef<THREE.Group | null>(null)

  const onWindowResize = useCallback(() => {
    if (cameraRef.current != null && rendererRef.current != null) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }
  }, [])

  const animate = useCallback(() => {
    if (
      rendererRef.current != null &&
      cameraRef.current != null &&
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      sceneRef.current
    ) {
      rendererRef.current.render(sceneRef.current, cameraRef.current)
    }
    requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (container == null || rendererRef.current != null) return

    const scene = sceneRef.current
    scene.background = new THREE.Color(0xffffff)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 1.5, 3)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    const light = new THREE.AmbientLight(0x404040)
    scene.add(light)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5).normalize()
    scene.add(directionalLight)

    const gridHelper = new THREE.GridHelper(10, 10)
    scene.add(gridHelper)

    const fixedAxesHelper = new THREE.AxesHelper(5)
    scene.add(fixedAxesHelper)

    animate()

    window.addEventListener('resize', onWindowResize, false)

    onSceneSetup(camera, renderer)

    return () => {
      window.removeEventListener('resize', onWindowResize)
      if (rendererRef.current != null) {
        rendererRef.current.dispose()
      }
    }
  }, [onSceneSetup, animate, onWindowResize])

  useEffect(() => {
    const scene = sceneRef.current
    if (model != null && model !== modelRef.current) {
      if (modelRef.current != null) {
        scene.remove(modelRef.current)
      }
      modelRef.current = model
      scene.add(model)
    }
  }, [model])

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div
      ref={containerRef}
      id="modelo-container"
      className="absolute inset-0"
    />
  )
}

export default Scene
