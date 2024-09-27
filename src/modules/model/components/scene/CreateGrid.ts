import * as THREE from 'three'

const CreateGrid3D = (scene: THREE.Scene, size = 10, divisions = 10): void => {
  // Grilla en el plano XY
  const gridXY = new THREE.GridHelper(size, divisions)
  scene.add(gridXY)

  // Grilla en el plano XZ
  const gridXZ = new THREE.GridHelper(size, divisions)
  gridXZ.rotation.x = Math.PI / 2
  scene.add(gridXZ)

  // Grilla en el plano YZ
  const gridYZ = new THREE.GridHelper(size, divisions)
  gridYZ.rotation.z = Math.PI / 2
  scene.add(gridYZ)
}

export default CreateGrid3D
