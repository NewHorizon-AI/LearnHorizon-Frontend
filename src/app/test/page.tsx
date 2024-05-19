import React from 'react'
import SidebarLeft from '@/components/test/SidebarLeft'
import SidebarRight from '@/components/test/SidebarRight'
import MainContent from '@/components/test/MainContent'

const AnatomyPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      <SidebarLeft />
      <MainContent />
      <SidebarRight />
    </div>
  )
}

export default AnatomyPage
