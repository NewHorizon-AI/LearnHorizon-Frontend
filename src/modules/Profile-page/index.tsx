import React from 'react'

import ProfileSidebar from './components/profile-sidebar/ProfileSidebar'
import MainContent from './components/main-content/MainContent'

const ProfilePage: React.FC = () => {
  return (
    <div className="flex">
      <ProfileSidebar />
      <MainContent />
    </div>
  )
}

export default ProfilePage
