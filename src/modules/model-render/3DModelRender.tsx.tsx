// 'use client'

// import React, { useRef, useEffect } from 'react'
// import * as THREE from 'three'
// import { GLTFLoader } from 'three-stdlib'

// // import useModelStore from '@/contexts/modelStore/edit-model/index'

// const ModelRender: React.FC = () => {
//   const { model } = useModelStore()

//   const mountRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     const mount = mountRef.current
//     if (mount == null || model?.file == null) return

//     const width = mount.clientWidth
//     const height = mount.clientHeight

//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
//     camera.position.z = 5

//     const renderer = new THREE.WebGLRenderer({ antialias: true })
//     renderer.setSize(width, height)
//     mount.appendChild(renderer.domElement)

//     const loader = new GLTFLoader()
//     const reader = new FileReader()

//     reader.onload = function (event) {
//       const contents = event.target?.result
//       if (contents instanceof ArrayBuffer) {
//         const arrayBuffer = contents
//         loader.parse(
//           arrayBuffer,
//           '',
//           function (gltf) {
//             const model = gltf.scene
//             scene.add(model)
//           },
//           function (error) {
//             console.error(error)
//           }
//         )
//       }
//     }

//     reader.readAsArrayBuffer(model.file)

//     const animate = (): void => {
//       requestAnimationFrame(animate)
//       renderer.render(scene, camera)
//     }
//     animate()

//     const handleResize = (): void => {
//       const width = mount.clientWidth
//       const height = mount.clientHeight
//       renderer.setSize(width, height)
//       camera.aspect = width / height
//       camera.updateProjectionMatrix()
//     }

//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//       mount.removeChild(renderer.domElement)
//     }
//   }, [model?.file])

//   return <div ref={mountRef} className="w-full h-full" />
// }

// export default ModelRender
