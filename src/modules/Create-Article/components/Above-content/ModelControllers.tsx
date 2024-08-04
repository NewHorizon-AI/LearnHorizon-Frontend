'use client'

import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import useFormStore from '@/contexts/article/create-article/useFormStore'

const ModelControllers: React.FC = () => {
  const { objectName, coordinates, rotationAngles, scale, setField } =
    useFormStore()

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="objectName">Nombre del Modelo 3D</Label>
          <Input
            id="objectName"
            type="text"
            value={objectName}
            onChange={(e) => {
              setField('objectName', e.target.value)
            }}
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
                  value={coordinates[index]}
                  onChange={(e) => {
                    const newValue = [...coordinates]
                    newValue[index] = parseFloat(e.target.value)
                    setField('coordinates', newValue)
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
                  value={rotationAngles[index]}
                  onChange={(e) => {
                    const newValue = [...rotationAngles]
                    newValue[index] = parseFloat(e.target.value)
                    setField('rotationAngles', newValue)
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
                  value={scale[index]}
                  onChange={(e) => {
                    const newValue = [...scale]
                    newValue[index] = parseFloat(e.target.value)
                    setField('scale', newValue)
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
}

export default ModelControllers
