import * as THREE from 'three'

const CreateBackground = (scene: THREE.Scene, color: string | number): void => {
  scene.background = new THREE.Color(color) // Configura el color de fondo
}

export default CreateBackground
