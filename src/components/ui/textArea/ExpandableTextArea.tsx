import React, { useRef, useEffect } from 'react'

interface ExpandableTextAreaProps {
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  maxLength?: number
}

const ExpandableTextArea: React.FC<ExpandableTextAreaProps> = ({
  id,
  value,
  onChange,
  placeholder,
  maxLength
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current != null) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [value])

  return (
    <textarea
      id={id}
      ref={textareaRef}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      rows={1}
    />
  )
}

export default ExpandableTextArea
