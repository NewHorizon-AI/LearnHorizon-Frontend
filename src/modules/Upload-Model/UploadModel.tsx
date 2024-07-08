import React from 'react'
import RenderFileHandler from './libs/RenderFileHandler'

const Upload: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
      <RenderFileHandler />
    </div>
  )
}

export default Upload
