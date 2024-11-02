'use client'

import React, { useState, useEffect } from 'react'

import { PrincipalInput } from '@/components/common/input'

const Hola: React.FC = () => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {}, [value])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <div>
      <label>
        Hello
        <PrincipalInput type="number" value={value} onChange={onChange} />
      </label>
    </div>
  )
}

export default Hola
