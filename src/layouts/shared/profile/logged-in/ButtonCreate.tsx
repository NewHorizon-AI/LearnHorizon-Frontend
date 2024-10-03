import React from 'react'
import ApiButton from '../../ui/button/ApiButton'

const ButtonCreate: React.FC = () => {
  return (
    <div className="mr-4">
      <ApiButton>
        <div className="min-w-16 font-semibold">Crear un articulo</div>
      </ApiButton>
    </div>
  )
}

export default ButtonCreate
