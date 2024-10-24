import React from 'react'

import { Input } from '@/components/ui/input'

import { type LucideIcon } from 'lucide-react'

interface PrincipalInputProps {
  value: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  Icon: LucideIcon
  type?: string
}

const PrincipalInput: React.FC<PrincipalInputProps> = (props) => {
  const { value, onChange, placeholder, Icon, type } = props

  return (
    <div className="relative w-full">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon className="h-5 w-5 text-gray-500" />
      </span>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered pl-10"
      />
    </div>
  )
}

export default PrincipalInput
