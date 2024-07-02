import React from 'react'
import { Button } from '@/components/ui/button'
import { FaBell, FaBoxOpen, FaCog } from 'react-icons/fa'
import SearchBar from '../ui/search'

import Link from 'next/link'
function NavBarEdit(): React.JSX.Element {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b shadow flex items-center h-14 px-4">
      <Link href="/">
        <div className="flex items-center gap-2">
          <FaBoxOpen className="h-6 w-6" />
          <h1 className="hidden sm:flex text-lg font-bold tracking-tighter">
            Learn Horizon
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-4 ml-auto w-32">
        <Button className="w-full">Finalizar</Button>
      </div>
    </nav>
  )
}

export default NavBarEdit
