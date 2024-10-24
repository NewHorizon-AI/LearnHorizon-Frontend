import React from 'react'
import { PrincipalInput } from '@/components/common/input'
import { type ITransformationsSettings } from '@/interfaces/scene-settings/scene-settings.interface'
import { RotateCcw, Move, Maximize } from 'lucide-react' // Iconos de lucide-react

interface TransformationsSettingsProps {
  transformationsSettings?: ITransformationsSettings
  onChange?: (field: string, axis: string, value: number) => void
}

const TransformationsSettings: React.FC<TransformationsSettingsProps> = ({
  transformationsSettings,
  onChange
}) => {
  const handleInputChange =
    (field: string, axis: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value)
      if (onChange != null) {
        onChange(field, axis, value)
      }
    }

  return (
    <section className="mb-6">
      {/* Position */}
      <div>
        <label>Position:</label>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">X</span>
            <PrincipalInput
              value={transformationsSettings?.position[0] ?? 0}
              onChange={handleInputChange('position', '0')}
              placeholder="Position X"
              Icon={Move}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Y</span>
            <PrincipalInput
              value={transformationsSettings?.position[1] ?? 0}
              onChange={handleInputChange('position', '1')}
              placeholder="Position Y"
              Icon={Move}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Z</span>
            <PrincipalInput
              value={transformationsSettings?.position[2] ?? 0}
              onChange={handleInputChange('position', '2')}
              placeholder="Position Z"
              Icon={Move}
            />
          </div>
        </div>
      </div>

      {/* Rotation */}
      <div className="mt-4">
        <label>Rotation:</label>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">X</span>
            <PrincipalInput
              value={transformationsSettings?.rotation[0] ?? 0}
              onChange={handleInputChange('rotation', '0')}
              placeholder="Rotation X"
              Icon={RotateCcw}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Y</span>
            <PrincipalInput
              value={transformationsSettings?.rotation[1] ?? 0}
              onChange={handleInputChange('rotation', '1')}
              placeholder="Rotation Y"
              Icon={RotateCcw}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Z</span>
            <PrincipalInput
              value={transformationsSettings?.rotation[2] ?? 0}
              onChange={handleInputChange('rotation', '2')}
              placeholder="Rotation Z"
              Icon={RotateCcw}
            />
          </div>
        </div>
      </div>

      {/* Scale */}
      <div className="mt-4">
        <label>Scale:</label>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">X</span>
            <PrincipalInput
              value={transformationsSettings?.scale[0] ?? 0}
              onChange={handleInputChange('scale', '0')}
              placeholder="Scale X"
              Icon={Maximize}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Y</span>
            <PrincipalInput
              value={transformationsSettings?.scale[1] ?? 0}
              onChange={handleInputChange('scale', '1')}
              placeholder="Scale Y"
              Icon={Maximize}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Z</span>
            <PrincipalInput
              value={transformationsSettings?.scale[2] ?? 0}
              onChange={handleInputChange('scale', '2')}
              placeholder="Scale Z"
              Icon={Maximize}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransformationsSettings
