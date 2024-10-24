import React from 'react'
import { type IModelSettings } from '@/interfaces/scene-settings/scene-settings.interface'
import { Checkbox } from '@/components/ui/checkbox'

interface ModelSettingsProps {
  modelSettings: IModelSettings
  onChange: (field: keyof IModelSettings, value: boolean) => void
}

const ModelSettings: React.FC<ModelSettingsProps> = ({
  modelSettings,
  onChange
}) => {
  const handleCheckboxChange = (checked: boolean): void => {
    onChange('visible', checked)
  }

  return (
    <section className="flex flex-col gap-4 mb-6">
      <label
        htmlFor="model-visible"
        className="text-sm font-medium leading-none"
      >
        Visible
      </label>
      <Checkbox
        id="model-visible"
        checked={modelSettings.visible}
        onCheckedChange={handleCheckboxChange}
      />
    </section>
  )
}

export default ModelSettings
