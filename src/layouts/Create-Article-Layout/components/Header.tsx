/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { FaBoxOpen } from 'react-icons/fa'

// Importacion del estado de creacion de un articulo
import useFormStore from '@/contexts/article/create-article/useFormStore'

import Link from 'next/link'
const Header: React.FC = () => {
  const { handleSubmit } = useFormStore()

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
        <Button className="w-full" onClick={handleSubmit}>
          Finalizar
        </Button>
      </div>
    </nav>
  )
}

export default Header
