import React from 'react'
import { Button } from '@/components/ui/button'
import { FaBell, FaBoxOpen, FaCog } from 'react-icons/fa'
import SearchBar from '../ui/search'

import Link from 'next/link'
function NavBar(): React.JSX.Element {
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
      <div className="hidden sm:flex flex-1 mx-4">
        <Link className="mr-4" href="/ruta1">
          Tendencias
        </Link>
        <Link className="mr-4" href="/ruta2">
          Categorias
        </Link>

        <Link href="/ruta2">Biblioteca</Link>
      </div>
      <SearchBar className="ml-4 sm:ml-0 flex-1 sm:max-w-[20%] mr-4" />
      <div className="flex items-center gap-4 ml-auto">
        <Button size="icon" variant="outline">
          <FaBell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button>
          <Link href="/article/create" className="font-semibold">
            Publicar
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          <img
            alt="Avatar"
            className="rounded-full"
            height="32"
            src="https://via.placeholder.com/150/771796"
            style={{
              aspectRatio: '32/32',
              objectFit: 'cover'
            }}
            width="32"
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
