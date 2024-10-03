import React from 'react'

// * Importar componentes para formar el header
import HeaderNotifications from './Notifications'
import ButtonCreate from './ButtonCreate'
import NavigationMenu from '../../navigation/logged-in/NavigationMenu'

const LoggedInHeader: React.FC = () => {
  return (
    <>
      <HeaderNotifications />
      <ButtonCreate />
      <NavigationMenu />
    </>
  )
}

export default LoggedInHeader
