import type * as THREE from 'three'

class CameraController {
  private readonly camera: THREE.Camera

  constructor(camera: THREE.Camera) {
    this.camera = camera
  }

  public setPosition(x: number, y: number, z: number): void {
    this.camera.position.set(x, y, z)
  }

  public setRotation(x: number, y: number, z: number): void {
    this.camera.rotation.set(x, y, z)
  }
}

export default CameraController
