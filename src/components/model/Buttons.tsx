import React from 'react'

interface ButtonsProps {
  onMove: (axis: 'x' | 'y' | 'z', direction: number) => void
  onRotate: (axis: 'x' | 'y' | 'z', angle: number) => void
}

const Buttons: React.FC<ButtonsProps> = ({ onMove, onRotate }) => {
  return (
    <>
      <div className="absolute top-4 left-4 space-y-2">
        <button
          onClick={() => {
            onMove('x', 0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Avanzar en X
        </button>
        <button
          onClick={() => {
            onMove('x', -0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Retroceder en X
        </button>
        <button
          onClick={() => {
            onMove('y', 0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Subir en Y
        </button>
        <button
          onClick={() => {
            onMove('y', -0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Bajar en Y
        </button>
        <button
          onClick={() => {
            onMove('z', 0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Avanzar en Z
        </button>
        <button
          onClick={() => {
            onMove('z', -0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Retroceder en Z
        </button>
      </div>
      <div className="absolute top-4 right-4 space-y-2">
        <button
          onClick={() => {
            onRotate('y', -0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Rotar Izquierda
        </button>
        <button
          onClick={() => {
            onRotate('y', 0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Rotar Derecha
        </button>
        <button
          onClick={() => {
            onRotate('x', -0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Rotar Arriba
        </button>
        <button
          onClick={() => {
            onRotate('x', 0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Rotar Abajo
        </button>
        <button
          onClick={() => {
            onRotate('z', 0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Rotar Horario
        </button>
        <button
          onClick={() => {
            onRotate('z', -0.1)
          }}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Rotar Anti-Horario
        </button>
      </div>
    </>
  )
}

export default Buttons
