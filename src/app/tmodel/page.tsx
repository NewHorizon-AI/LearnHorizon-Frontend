'use client'

import React, { useEffect } from 'react'
import createScene from '../components/Scene'
import createRenderer from '../components/Renderer'
import loadModel from '../components/ModelLoader'
import ControlPanel from '../components/ControlPanel'

const Home: React.FC = () => {
  useEffect(() => {
    const { scene, camera } = createScene()
    const renderer = createRenderer()

    loadModel(scene)

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      // Cleanup on unmount
      document.body.removeChild(renderer.domElement)
    }
  }, [])

  return <ControlPanel />
}

export default Home
