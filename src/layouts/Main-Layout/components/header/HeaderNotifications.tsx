import React from 'react'
import { Button } from '@/components/ui/button'
import { FaBell } from 'react-icons/fa'

const HeaderNotifications: React.FC = () => {
  return (
    <Button size="icon" variant="outline" className="mr-4">
      <FaBell className="h-4 w-4" />
      <span className="sr-only">Notifications</span>
    </Button>
  )
}

export default HeaderNotifications
