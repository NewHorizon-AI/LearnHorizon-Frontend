import React from 'react'

import ThreeModel from './views/ThreeModel'
import { type ViewModelProps } from './interfaces/model.interface'

const ViewModel: React.FC<ViewModelProps> = (props) => {
  return (
    <div className="h-full w-full">
      <ThreeModel model={props.model} />
    </div>
  )
}

export default ViewModel
