'use client'

import React, { useEffect } from 'react'

// * Importar Layout
import MainLayout from '@/layouts/Main-Layout/MainLayout'

import ProfileSidebar from './components/profile-sidebar/ProfileSidebar'
import MainContent from './components/main-content/MainContent'

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
        <ProfileSidebar />
        <MainContent />
      </div>
    </MainLayout>
  )
}

export default ProfileModule
