/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'

import React, { useEffect } from 'react'
import createScene from '@/components/tmodel/Scene'
import createRenderer from '@/components/tmodel/Renderer'
import loadModel from '@/components/tmodel/ModelLoader'
import ControlPanel from '@/components/tmodel/ControlPanel'

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
