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

// import { Menu, Undo, Redo, Cloud, Plus, BarChart2, Monitor } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// export default function Header() {
//   return (
//     <header className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
//       <div className="flex items-center space-x-4">
//         <Button variant="ghost" size="icon">
//           <Menu className="h-6 w-6" />
//         </Button>
//         <span className="font-semibold">Archivo</span>
//         <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1">
//           <span className="text-xs">Redimensión y Rediseño Mágico</span>
//         </div>
//         <div className="flex space-x-1">
//           <Button variant="ghost" size="icon">
//             <Undo className="h-4 w-4" />
//           </Button>
//           <Button variant="ghost" size="icon">
//             <Redo className="h-4 w-4" />
//           </Button>
//         </div>
//         <Button variant="ghost" size="sm" className="text-xs">
//           <Cloud className="h-4 w-4 mr-1" />
//           Copia de Motores
//         </Button>
//       </div>
//       <div className="flex items-center space-x-2">
//         <Button variant="ghost" size="icon">
//           <Plus className="h-6 w-6" />
//         </Button>
//         <Button variant="ghost" size="icon">
//           <BarChart2 className="h-6 w-6" />
//         </Button>
//         <Button variant="ghost" size="sm" className="px-3">
//           <Monitor className="h-4 w-4 mr-2" />
//           Presentar
//         </Button>
//         <Avatar>
//           <AvatarImage src="/placeholder.svg" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//       </div>
//     </header>
//   )
// }

// 'use client'

// import { useState } from 'react'
// import {
//   Menu,
//   X,
//   Home,
//   FileText,
//   Image,
//   Video,
//   Music,
//   Settings
// } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { cn } from '@/lib/utils'

// export default function LeftSheet() {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleSheet = () => setIsOpen(!isOpen)

//   const menuItems = [
//     { icon: Home, label: 'Home' },
//     { icon: FileText, label: 'Documents' },
//     { icon: Image, label: 'Images' },
//     { icon: Video, label: 'Videos' },
//     { icon: Music, label: 'Audio' },
//     { icon: Settings, label: 'Settings' }
//   ]

//   return (
//     <>
//       <Button
//         variant="ghost"
//         size="icon"
//         className="fixed top-2 left-2 z-50"
//         onClick={toggleSheet}
//       >
//         <Menu className="h-6 w-6" />
//       </Button>

//       {/* Backdrop */}
//       <div
//         className={cn(
//           'fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out',
//           isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//         )}
//         onClick={toggleSheet}
//       />

//       {/* Sheet */}
//       <div
//         className={cn(
//           'fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out',
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         )}
//       >
//         <div className="p-4 flex justify-between items-center border-b">
//           <h2 className="text-lg font-semibold">Menu</h2>
//           <Button variant="ghost" size="icon" onClick={toggleSheet}>
//             <X className="h-6 w-6" />
//           </Button>
//         </div>
//         <nav className="p-4">
//           <ul className="space-y-2">
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <Button variant="ghost" className="w-full justify-start">
//                   <item.icon className="mr-2 h-4 w-4" />
//                   {item.label}
//                 </Button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </>
//   )
// }
