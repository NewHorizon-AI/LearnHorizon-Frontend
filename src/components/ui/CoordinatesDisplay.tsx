import React from 'react'
import type * as THREE from 'three'
import { Input } from '@/components/ui/input'

interface CoordinatesDisplayProps {
  model: THREE.Group | null
  frame: number
  onPositionChange: (axis: 'x' | 'y' | 'z', value: number) => void
  onRotationChange: (axis: 'x' | 'y' | 'z', value: number) => void
}

const CoordinatesDisplay: React.FC<CoordinatesDisplayProps> = ({
  model,
  frame,
  onPositionChange,
  onRotationChange
}) => {
  return model != null ? (
    <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
      <div>Position:</div>
      <div>
        X:
        <Input
          type="number"
          value={model.position.x.toFixed(2)}
          onChange={(e) => {
            onPositionChange('x', parseFloat(e.target.value))
          }}
        />
      </div>
      <div>
        Y:
        <Input
          type="number"
          value={model.position.y.toFixed(2)}
          onChange={(e) => {
            onPositionChange('y', parseFloat(e.target.value))
          }}
        />
      </div>
      <div>
        Z:
        <Input
          type="number"
          value={model.position.z.toFixed(2)}
          onChange={(e) => {
            onPositionChange('z', parseFloat(e.target.value))
          }}
        />
      </div>
      <div>Rotation:</div>
      <div>
        X:
        <Input
          type="number"
          value={(model.rotation.x * (180 / Math.PI)).toFixed(2)}
          onChange={(e) => {
            onRotationChange('x', parseFloat(e.target.value) * (Math.PI / 180))
          }}
        />
      </div>
      <div>
        Y:
        <Input
          type="number"
          value={(model.rotation.y * (180 / Math.PI)).toFixed(2)}
          onChange={(e) => {
            onRotationChange('y', parseFloat(e.target.value) * (Math.PI / 180))
          }}
        />
      </div>
      <div>
        Z:
        <Input
          type="number"
          value={(model.rotation.z * (180 / Math.PI)).toFixed(2)}
          onChange={(e) => {
            onRotationChange('z', parseFloat(e.target.value) * (Math.PI / 180))
          }}
        />
      </div>
    </div>
  ) : null
}

export default CoordinatesDisplay
