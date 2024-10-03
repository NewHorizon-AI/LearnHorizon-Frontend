import React from 'react'

import { ViewProfile } from './components/views'

interface ProfileModuleProps {
  username: string
}

const ProfileModule: React.FC<ProfileModuleProps> = ({ username }) => {
  return <ViewProfile username={username} />
}

export default ProfileModule
