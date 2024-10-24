import React from 'react'
import { PrincipalInput } from '@/components/common/input'
import { type IGridSettings } from '@/interfaces/scene-settings/scene-settings.interface'
import { PaintBucket, Maximize, Grid } from 'lucide-react' // Importa los íconos de lucide-react

interface GridSettingsProps {
  gridSettings: IGridSettings
  onChange: (field: keyof IGridSettings, value: string | number) => void
}

const GridSettings: React.FC<GridSettingsProps> = ({
  gridSettings,
  onChange
}) => {
  const handleInputChange =
    (field: keyof IGridSettings) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value
      onChange(field, value)
    }

  return (
    <section>
      <div className="flex gap-4 flex-col">
        {/* Color del fondo */}
        <div>
          <label>Background Color:</label>
          <PrincipalInput
            type="string"
            value={gridSettings.backgroundColor}
            onChange={handleInputChange('backgroundColor')}
            placeholder="Background Color"
            Icon={PaintBucket} // Usando el icono de cubeta de pintura para el color de fondo
          />
        </div>

        {/* Tamaño de la grilla */}
        <div>
          <label>Size:</label>
          <PrincipalInput
            value={gridSettings.size}
            onChange={handleInputChange('size')}
            placeholder="Grid Size"
            Icon={Maximize} // Usando el icono de maximizar para el tamaño de la grilla
          />
        </div>

        {/* Divisiones de la grilla */}
        <div>
          <label>Divisions:</label>
          <PrincipalInput
            value={gridSettings.divisions}
            onChange={handleInputChange('divisions')}
            placeholder="Grid Divisions"
            Icon={Grid} // Usando el icono de grilla para las divisiones
          />
        </div>
      </div>
    </section>
  )
}

export default GridSettings
