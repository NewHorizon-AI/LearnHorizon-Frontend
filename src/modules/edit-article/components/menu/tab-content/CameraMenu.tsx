import React from 'react'
import { Expand, ZoomIn, ZoomOut } from 'lucide-react' // Importa los íconos
import { PrincipalInput } from '@/components/common/input/' // Importamos el componente reutilizable
import { type ICameraSettings } from '@/interfaces/scene-settings/scene-settings.interface'

interface CameraSettingsProps {
  cameraSettings: ICameraSettings
}

const CameraMenu: React.FC<CameraSettingsProps> = ({ cameraSettings }) => {
  return (
    <section>
      <div className="flex flex-col gap-4">
        {/* Campo para FOV */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            FOV (Field of View):
          </label>
          <PrincipalInput
            value={cameraSettings.fov}
            placeholder="FOV"
            Icon={Expand} // Pasamos el ícono como prop
          />
        </div>

        {/* Campo para Near */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Near:
          </label>
          <PrincipalInput
            value={cameraSettings.near}
            placeholder="Near"
            Icon={ZoomIn} // Pasamos el ícono como prop
          />
        </div>

        {/* Campo para Far */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Far:
          </label>
          <PrincipalInput
            value={cameraSettings.far}
            placeholder="Far"
            Icon={ZoomOut} // Pasamos el ícono como prop
          />
        </div>
      </div>
    </section>
  )
}

export default CameraMenu
