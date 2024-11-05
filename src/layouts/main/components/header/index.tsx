import React from 'react'

// * Importar componentes
import HeaderLogo from './HeaderLogo'
// import HeaderLinks from './HeaderLinks'

import Profile from '@/layouts/shared/profile/index'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const { className } = props

  return (
    <nav
      className={`${className} sticky top-0 left-0 right-0 z-50 bg-white border-b shadow flex items- h-14 px-4`}
    >
      <section className="flex justify-between w-full">
        <HeaderLogo />
        {/* <HeaderLinks /> */}
        <Profile />
      </section>
    </nav>
  )
}

export default Header
