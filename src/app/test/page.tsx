import React from 'react'
import SidebarLeft from '@/components/article/articleContent/SidebarLeft'
import SidebarRight from '@/components/article/articleContent/SidebarRight'
import MainContent from '@/components/article/articleContent/MainContent'

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
