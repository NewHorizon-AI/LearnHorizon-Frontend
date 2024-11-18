import * as THREE from 'three'

const centerPivot = (model: THREE.Vector3): void => {
  // Solo continúa si el modelo tiene geometría (ej., un Mesh)
  if (model instanceof THREE.Mesh) {
    const geometry = model.geometry
    geometry.computeBoundingBox()

    // Calcula el centro de la geometría
    const center = new THREE.Vector3()
    geometry.boundingBox?.getCenter(center)

    // Traslada la geometría al origen
    geometry.translate(-center.x, -center.y, -center.z)

    // Posiciona el modelo en el centro original
    model.position.add(center)
  }
}

export default centerPivot
