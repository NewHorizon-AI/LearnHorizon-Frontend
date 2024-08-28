import React from 'react'

import ProfileModule from '@/modules/Profile-page/index'

interface ProfilePageProps {
  params: {
    username: string
  }
}

const ProfilePage: React.FC<ProfilePageProps> = ({ params }) => {
  return <ProfileModule username={params.username} />
}

export default ProfilePage
