/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as THREE from 'three'

class ModelController {
  private readonly model: THREE.Object3D

  constructor(model: THREE.Object3D) {
    this.model = model
  }

  // Método para mover el modelo a una posición específica
  public setPosition(x: number, y: number, z: number): void {
    this.model.position.set(x, y, z)
  }

  // Método para rotar el modelo
  public setRotation(x: number, y: number, z: number): void {
    this.model.rotation.set(x, y, z)
  }

  // Método para escalar el modelo
  public setScale(x: number, y: number, z: number): void {
    this.model.scale.set(x, y, z)
  }

  // Método para mover el modelo en respuesta a eventos del mouse
  public enableDragging(
    camera: THREE.Camera,
    renderer: THREE.Renderer,
    controls: any
  ): void {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let isDragging = false
    const previousMousePosition = new THREE.Vector2()

    const onMouseDown = (event: MouseEvent) => {
      isDragging = true
      previousMousePosition.set(event.clientX, event.clientY)
    }

    const onMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const deltaMove = new THREE.Vector2(
          event.clientX - previousMousePosition.x,
          event.clientY - previousMousePosition.y
        )

        const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            toRadians(deltaMove.y * 0.5),
            toRadians(deltaMove.x * 0.5),
            0,
            'XYZ'
          )
        )

        this.model.quaternion.multiplyQuaternions(
          deltaRotationQuaternion,
          this.model.quaternion
        )

        previousMousePosition.set(event.clientX, event.clientY)
      }
    }

    const onMouseUp = () => {
      isDragging = false
    }

    const toRadians = (angle: number) => THREE.MathUtils.degToRad(angle)

    // Agregar event listeners
    renderer.domElement.addEventListener('mousedown', onMouseDown, false)
    renderer.domElement.addEventListener('mousemove', onMouseMove, false)
    renderer.domElement.addEventListener('mouseup', onMouseUp, false)
    renderer.domElement.addEventListener('mouseleave', onMouseUp, false)

    // Limpieza de los event listeners
    this.cleanup = () => {
      renderer.domElement.removeEventListener('mousedown', onMouseDown, false)
      renderer.domElement.removeEventListener('mousemove', onMouseMove, false)
      renderer.domElement.removeEventListener('mouseup', onMouseUp, false)
      renderer.domElement.removeEventListener('mouseleave', onMouseUp, false)
    }
  }

  // Método para limpiar event listeners
  private cleanup: () => void = () => {}

  // Llamar este método al limpiar para remover los event listeners
  public dispose(): void {
    this.cleanup()
  }
}

export default ModelController
