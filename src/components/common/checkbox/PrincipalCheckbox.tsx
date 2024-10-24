import React from 'react'
import { type LucideIcon } from 'lucide-react' // Importa LucideIcon para el ícono opcional

interface PrincipalCheckboxProps {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  Icon?: LucideIcon // Opción de pasar un ícono
}

const PrincipalCheckbox: React.FC<PrincipalCheckboxProps> = ({
  checked,
  onChange,
  label,
  Icon
}) => {
  return (
    <div className="flex items-center space-x-3">
      {Icon != null && <Icon className="h-5 w-5 text-gray-500" />}
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox checkbox-primary"
      />
    </div>
  )
}

export default PrincipalCheckbox
