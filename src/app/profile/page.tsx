import React from 'react'

import ProfilePage from '@/modules/Profile-page/index'
import MainLayout from '@/layouts/Main-Layout/MainLayout'

const page: React.FC = () => {
  return (
    <MainLayout>
      <ProfilePage />
    </MainLayout>
  )
}

export default page
