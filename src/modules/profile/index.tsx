'use client'

import React, { useEffect } from 'react'

// * Importar Layout
import MainLayout from '@/layouts/Main-Layout/MainLayout'

import Sidebar from './components/sidebar/ProfileSidebar'
import Content from './components/content/ArticleContent'

// * Importar fetcher
import { fetchUserProfileData } from '@/lib/apiUser/getUser'

interface ProfileModuleProps {
  username: string
}

const ProfileModule: React.FC<ProfileModuleProps> = ({ username }) => {
  useEffect(() => {
    void fetchUserProfileData(username)
  }, [username])

  return (
    <MainLayout>
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </MainLayout>
  )
}

export default ProfileModule
