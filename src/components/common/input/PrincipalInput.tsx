import React from 'react'

import { Input } from '@/components/ui/input'

import { type PrincipalInputProps } from './interfaces/input.interface'

const PrincipalInput: React.FC<PrincipalInputProps> = (props) => {
  const {
    value = '',
    onChange,
    placeholder = 'Escribe aquí...',
    Icon,
    type = 'text',
    onBlur,
    handleKeyDown,
    className = '',
    ariaLabel,
    ariaDescribedBy
  } = props

  return (
    <div className={`relative w-full ${className}`}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {Icon != null ? <Icon className="h-5 w-5 text-gray-500" /> : null}
      </span>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        className="input input-bordered pl-10"
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      />
    </div>
  )
}

export default PrincipalInput
