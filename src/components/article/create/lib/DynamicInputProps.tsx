import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface DynamicInputProps {
  values: string[]
  setValues: (values: string[]) => void
  label: string
  placeholder: string
}

const DynamicInput: React.FC<DynamicInputProps> = ({
  values,
  setValues,
  label,
  placeholder
}) => {
  const handleChange = (index: number, newValue: string): void => {
    const newValues = [...values]
    newValues[index] = newValue
    setValues(newValues)
  }

  const handleAdd = (): void => {
    setValues([...values, ''])
  }

  const handleRemove = (index: number): void => {
    const newValues = values.filter((_, i) => i !== index)
    setValues(newValues)
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {values.map((value, index) => (
        <div key={index} className="flex space-x-2">
          <Input
            type="text"
            value={value}
            onChange={(e) => {
              handleChange(index, e.target.value)
            }}
            placeholder={placeholder}
          />
          <Button
            type="button"
            onClick={() => {
              handleRemove(index)
            }}
          >
            -
          </Button>
        </div>
      ))}
      <Button type="button" onClick={handleAdd}>
        +
      </Button>
    </div>
  )
}

export default DynamicInput
