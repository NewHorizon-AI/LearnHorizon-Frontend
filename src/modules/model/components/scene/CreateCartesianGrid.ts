import * as THREE from 'three'

const CreateCartesianGrid = (scene: THREE.Scene, size = 100): void => {
  // Eje X (rojo)
  const xAxisGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-size, 0, 0), // Punto inicial del eje X
    new THREE.Vector3(size, 0, 0) // Punto final del eje X
  ])
  const xAxisMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 }) // Rojo
  const xAxis = new THREE.Line(xAxisGeometry, xAxisMaterial)
  scene.add(xAxis)

  // Eje Y (verde)
  const yAxisGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -size, 0), // Punto inicial del eje Y
    new THREE.Vector3(0, size, 0) // Punto final del eje Y
  ])
  const yAxisMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 }) // Verde
  const yAxis = new THREE.Line(yAxisGeometry, yAxisMaterial)
  scene.add(yAxis)

  // Eje Z (azul)
  const zAxisGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, -size), // Punto inicial del eje Z
    new THREE.Vector3(0, 0, size) // Punto final del eje Z
  ])
  const zAxisMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff }) // Azul
  const zAxis = new THREE.Line(zAxisGeometry, zAxisMaterial)
  scene.add(zAxis)
}

export default CreateCartesianGrid
