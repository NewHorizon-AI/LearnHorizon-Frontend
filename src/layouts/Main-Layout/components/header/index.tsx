import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderLinks from './HeaderLinks'
import HeaderSearchBar from './HeaderSearchBar'
import HeaderNotifications from './HeaderNotifications'
import HeaderProfile from './HeaderProfile'
import Headerpublish from './Headerpublish'

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b shadow flex items-center h-14 px-4">
      <HeaderLogo />
      <HeaderLinks />
      <HeaderSearchBar />
      <Headerpublish />
      <HeaderNotifications />
      <HeaderProfile />
    </nav>
  )
}

export default Header
