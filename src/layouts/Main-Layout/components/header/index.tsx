'use client'

import React from 'react'

// * Importar componentes
import HeaderLogo from './HeaderLogo'
import HeaderLinks from './HeaderLinks'
import HeaderSearchBar from './HeaderSearchBar'

// * Importar componentes para un usuario logueado
import HeaderNotifications from './sections/logged-in/HeaderNotifications'
import HeaderPublish from './sections/logged-in/Headerpublish'
import NavigationMenu from './navigation/logged-in/NavigationMenu'

// * Importar componentes para un usuario no logueado
import HeaderProfile from './sections/logged-out/HeaderLogin'

import useUser from '@/contexts/user-store/index'

const Header: React.FC = () => {
  /*
   * Componente que se encarga de renderizar el header de la aplicación
   TODO: Implementar el estado del usuario para renderizar los componentes correspondientes utilizando NextAuth
   */

  const { isLoggedIn } = useUser()

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b shadow flex items-center h-14 px-4">
      <HeaderLogo />
      <HeaderLinks />
      {/* <HeaderSearchBar /> */}
      {isLoggedIn ? (
        <>
          <HeaderNotifications />
          <HeaderPublish />
          <NavigationMenu />
        </>
      ) : (
        <>
          <HeaderProfile />
        </>
      )}
    </nav>
  )
}

export default Header
