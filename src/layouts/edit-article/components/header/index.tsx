import React from 'react'

import {
  Menu,
  Undo,
  Redo,
  CloudOff,
  Plus,
  BarChart2,
  Monitor
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-gradient-to-r bg-white border-b shadow ">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
        <span className="font-semibold">Archivo</span>

        <div className="flex space-x-1">
          <Button variant="ghost" size="icon">
            <Undo className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Redo className="h-6 w-6" />
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-xs">
          <CloudOff className="h-6 w-6 mr-1" />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Plus className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <BarChart2 className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="sm" className="px-3">
          <Monitor className="h-4 w-4 mr-2" />
          Presentar
        </Button>
        <Avatar>
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

export default Header
