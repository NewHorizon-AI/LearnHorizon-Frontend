import React from 'react'

import ThreeModel from './views/ThreeModel'
import { type ThreeModelProps } from './interfaces/model.interface'

const ViewModel: React.FC<ThreeModelProps> = ({ model }) => {
  return (
    <div className="h-full w-full">
      <ThreeModel model={model} />
    </div>
  )
}

export default ViewModel
