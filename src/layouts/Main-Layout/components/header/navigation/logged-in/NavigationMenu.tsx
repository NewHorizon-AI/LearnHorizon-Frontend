'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { X, User, FileText, Settings, LogOut } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

import useUser from '@/contexts/user-store/index'

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { resetUser, user } = useUser()

  const handleClose = (): void => {
    setIsOpen(false)
  }

  const handleSignOut = (): void => {
    resetUser() // Resetea el estado del usuario
    setIsOpen(false) // Cierra el menú lateral
  }

  const username = 'kxyzDev'
  const fullName = 'Alejandro Diaz'
  const avatarUrl = 'https://via.placeholder.com/150'

  const links = [
    { href: '/profile', label: 'Perfil', icon: <User size={16} /> },
    { href: '/about', label: 'Mis artículos', icon: <FileText size={16} /> },
    { href: '/settings', label: 'Ajustes', icon: <Settings size={16} /> },
    {
      href: '/',
      label: 'Cerrar sesión',
      icon: <LogOut size={16} />,
      onClick: handleSignOut
    }
  ]

  return (
    <nav>
      <div className="flex items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <img
                src={avatarUrl}
                alt="Profile"
                className="h-8 w-8 rounded-full mr-2"
              />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-[300px] sm:w-[320px] rounded-l-xl border-l-2 border-gray-200 p-0"
          >
            {/* // ! Perfil del usuario */}
            <div className="flex items-center justify-between px-4 pt-4">
              <div className="flex items-center">
                <img
                  src={avatarUrl}
                  alt="Profile"
                  className="h-8 w-8 rounded-full mr-2"
                />
                <div>
                  <div className="text-sm font-bold">{fullName}</div>
                  <div className="text-sm text-gray-500 mt-[-4px]">
                    @{username}
                  </div>
                </div>
              </div>
              <Button className="p-3" variant="ghost" onClick={handleClose}>
                <X className="h-4 w-4" />
                <span className="sr-only">Cerrar</span>
              </Button>
            </div>

            {/* // ! Links */}
            <nav className="p-4">
              <Separator className="mt-2 mb-2" />
              <div className="flex flex-col">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center text-sm px-2 py-1.5 hover:bg-gray-200 rounded-md"
                    onClick={link.onClick !== null ? link.onClick : handleClose}
                  >
                    {link.icon} {/* Icono del enlace */}
                    <span className="pl-2">{link.label}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default NavigationMenu
