import React from 'react'
import { type ICameraSettings } from '@/interfaces/scene-settings/scene-settings.interface'

interface CameraSettingsProps {
  settings: ICameraSettings
  onChange: (key: string, value: any) => void
}

const CameraSettings: React.FC<CameraSettingsProps> = ({
  settings,
  onChange
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Camera Settings</h2>
      <div className="flex gap-4">
        <div>
          <label>FOV:</label>
          <input
            type="number"
            value={settings.fov}
            onChange={(e) => {
              onChange('fov', e.target.value)
            }}
            className="input input-bordered"
          />
        </div>
        <div>
          <label>Near:</label>
          <input
            type="number"
            value={settings.near}
            onChange={(e) => {
              onChange('near', e.target.value)
            }}
            className="input input-bordered"
          />
        </div>
        <div>
          <label>Far:</label>
          <input
            type="number"
            value={settings.far}
            onChange={(e) => {
              onChange('far', e.target.value)
            }}
            className="input input-bordered"
          />
        </div>
      </div>
      {/* Repite el mismo patrón para las propiedades de posición, rotación, etc. */}
    </div>
  )
}

export default CameraSettings
