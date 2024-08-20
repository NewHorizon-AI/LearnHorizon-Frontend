import React from 'react'
import Link from 'next/link'

const HeaderLinks: React.FC = () => {
  return (
    <div className="hidden sm:flex flex-1 mx-4">
      <Link href="/ruta1" className="mr-4">
        Tendencias
      </Link>
      <Link href="/ruta2" className="mr-4">
        Categorías
      </Link>
      <Link href="/ruta3">Biblioteca</Link>
    </div>
  )
}

export default HeaderLinks
