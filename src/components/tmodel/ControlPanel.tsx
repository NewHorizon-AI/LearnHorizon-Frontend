import React from 'react'

const ControlPanel: React.FC = () => {
  return (
    <div className="control-panel">
      <button
        onClick={() => {
          console.log('Button Clicked')
        }}
      >
        Control
      </button>
    </div>
  )
}

export default ControlPanel
