/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react'
import type * as THREE from 'three' // Importa el espacio de nombres THREE
import { Input } from '@/components/ui/input' // Importa el componente Input de shadcn/ui
import { Label } from '@/components/ui/label' // Importa Label
import { Button } from '@/components/ui/button' // Importa Button

interface ControlPanelProps {
  cameraPosition: THREE.Vector3
  modelPosition: THREE.Vector3
  onCameraChange: (position: THREE.Vector3) => void
  onModelChange: (position: THREE.Vector3) => void
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  cameraPosition,
  modelPosition,
  onCameraChange,
  onModelChange
}) => {
  const [camPos, setCamPos] = React.useState<THREE.Vector3>(
    cameraPosition.clone()
  )
  const [modPos, setModPos] = React.useState<THREE.Vector3>(
    modelPosition.clone()
  )

  const handleCameraInputChange = (axis: 'x' | 'y' | 'z', value: string) => {
    const newValue = parseFloat(value)
    if (!isNaN(newValue)) {
      camPos[axis] = newValue
      setCamPos(camPos.clone())
    }
  }

  const handleModelInputChange = (axis: 'x' | 'y' | 'z', value: string) => {
    const newValue = parseFloat(value)
    if (!isNaN(newValue)) {
      modPos[axis] = newValue
      setModPos(modPos.clone())
    }
  }

  const applyChanges = () => {
    onCameraChange(camPos)
    onModelChange(modPos)
  }

  return (
    <div className="p-4 bg-white shadow-md">
      <h2 className="text-lg font-bold mb-4">Control de Posiciones</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Posición de la Cámara</h3>
        {['x', 'y', 'z'].map((axis) => (
          <div key={`camera-${axis}`} className="mb-2">
            <Label htmlFor={`camera-${axis}`}>Eje {axis.toUpperCase()}</Label>
            <Input
              id={`camera-${axis}`}
              type="number"
              value={camPos[axis as 'x' | 'y' | 'z']}
              onChange={(e) =>
                handleCameraInputChange(axis as 'x' | 'y' | 'z', e.target.value)
              }
            />
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Posición del Modelo</h3>
        {['x', 'y', 'z'].map((axis) => (
          <div key={`model-${axis}`} className="mb-2">
            <Label htmlFor={`model-${axis}`}>Eje {axis.toUpperCase()}</Label>
            <Input
              id={`model-${axis}`}
              type="number"
              value={modPos[axis as 'x' | 'y' | 'z']}
              onChange={(e) =>
                handleModelInputChange(axis as 'x' | 'y' | 'z', e.target.value)
              }
            />
          </div>
        ))}
      </div>
      <Button onClick={applyChanges}>Aplicar Cambios</Button>
    </div>
  )
}

export default ControlPanel
