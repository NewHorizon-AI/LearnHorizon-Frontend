import React from 'react'
import ExpandableTextArea from './ExpandableTextArea'
import CharacterCount from './CharacterCount'
import { Label } from '@/components/ui/label'

import { type StateHandler } from '@/interfaces/formData/INewPublication'

interface DescriptionInputProps {
  id: string
  placeholder?: string
  maxLength: number
  description: StateHandler<string>
}

const DescriptionInput = ({
  id,
  placeholder,
  maxLength,
  description
}: DescriptionInputProps): React.JSX.Element => {
  return (
    <div>
      <Label htmlFor={id}>Descripción</Label>
      <ExpandableTextArea
        id={id}
        value={description.value}
        onChange={(e) => {
          description.setValue(e.target.value)
        }}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <CharacterCount
        currentCount={description.value.length}
        maxCount={maxLength}
      />
    </div>
  )
}

export default DescriptionInput
