import React from 'react'

import ProfileModule from '@/modules/profile/index'

interface ProfilePageProps {
  params: {
    username: string
  }
}

const ProfilePage: React.FC<ProfilePageProps> = ({ params }) => {
  return <ProfileModule username={params.username} />
}

export default ProfilePage
