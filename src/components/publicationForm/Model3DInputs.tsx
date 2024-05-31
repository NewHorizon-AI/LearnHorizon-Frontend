import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

interface Model3DInputsProps {
  objectName: { value: string; setValue: (value: string) => void }
  coordinates: {
    value: [number, number, number]
    setValue: (value: [number, number, number]) => void
  }
  rotationAngles: {
    value: [number, number, number]
    setValue: (value: [number, number, number]) => void
  }
  scale: {
    value: [number, number, number]
    setValue: (value: [number, number, number]) => void
  }
}

const Model3DInputs: React.FC<Model3DInputsProps> = ({
  objectName,
  coordinates,
  rotationAngles,
  scale
}) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 gap-4">
      <div>
        <Label htmlFor="objectName">Nombre del Modelo 3D</Label>
        <Input
          id="objectName"
          type="text"
          value={objectName.value}
          onChange={(e) => objectName.setValue(e.target.value)}
          placeholder="Nombre del Modelo 3D"
        />
      </div>
      <div>
        <Label>Coordenadas</Label>
        <div className="flex space-x-4">
          {['X', 'Y', 'Z'].map((axis, index) => (
            <div key={axis} className="flex-1">
              <Label htmlFor={`coordinates-${axis}`}>{axis}</Label>
              <Input
                id={`coordinates-${axis}`}
                type="number"
                value={coordinates.value[index]}
                onChange={(e) => {
                  const newValue = [...coordinates.value] as [
                    number,
                    number,
                    number
                  ]
                  newValue[index] = parseFloat(e.target.value)
                  coordinates.setValue(newValue)
                }}
                placeholder={axis}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Label>Ángulos de Rotación</Label>
        <div className="flex space-x-4">
          {['X', 'Y', 'Z'].map((axis, index) => (
            <div key={axis} className="flex-1">
              <Label htmlFor={`rotationAngles-${axis}`}>{axis}</Label>
              <Input
                id={`rotationAngles-${axis}`}
                type="number"
                value={rotationAngles.value[index]}
                onChange={(e) => {
                  const newValue = [...rotationAngles.value] as [
                    number,
                    number,
                    number
                  ]
                  newValue[index] = parseFloat(e.target.value)
                  rotationAngles.setValue(newValue)
                }}
                placeholder={axis}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Label>Escala</Label>
        <div className="flex space-x-4">
          {['X', 'Y', 'Z'].map((axis, index) => (
            <div key={axis} className="flex-1">
              <Label htmlFor={`scale-${axis}`}>{axis}</Label>
              <Input
                id={`scale-${axis}`}
                type="number"
                value={scale.value[index]}
                onChange={(e) => {
                  const newValue = [...scale.value] as [number, number, number]
                  newValue[index] = parseFloat(e.target.value)
                  scale.setValue(newValue)
                }}
                placeholder={axis}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Model3DInputs
