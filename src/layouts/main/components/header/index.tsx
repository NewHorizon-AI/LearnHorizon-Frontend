import React from 'react'

// * Importar componentes
import HeaderLogo from './HeaderLogo'
import HeaderLinks from './HeaderLinks'

import Profile from '@/layouts/shared/profile/index'

const Header: React.FC = () => {
  /*
   * Componente que se encarga de renderizar el header de la aplicación
   TODO: Implementar el estado del usuario para renderizar los componentes correspondientes utilizando NextAuth
   */

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b shadow flex items-center h-14 px-4">
      <HeaderLogo />
      <HeaderLinks />
      <Profile />
    </nav>
  )
}

export default Header
