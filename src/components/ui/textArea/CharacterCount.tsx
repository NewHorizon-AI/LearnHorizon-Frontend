import React from 'react'

interface CharacterCountProps {
  currentCount: number
  maxCount: number
}

const CharacterCount: React.FC<CharacterCountProps> = ({
  currentCount,
  maxCount
}) => {
  return (
    <div className="text-right text-gray-500 text-sm">
      {currentCount} / {maxCount}
    </div>
  )
}

export default CharacterCount
