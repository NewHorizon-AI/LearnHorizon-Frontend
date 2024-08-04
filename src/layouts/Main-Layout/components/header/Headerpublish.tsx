import React from 'react'
import ApiButton from '../../ui/button/ApiButton'

const Headerpublish: React.FC = () => {
  return (
    <div className="mr-4">
      <ApiButton url="/article/create">
        <div className="min-w-16 font-semibold">Publicar</div>
      </ApiButton>
    </div>
  )
}

export default Headerpublish
