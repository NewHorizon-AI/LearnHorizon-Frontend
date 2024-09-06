'use client'

import React from 'react'

import LoggedInHeader from './logged-in/index'
import LoggedOutHeader from './logged-out'

import useUser from '@/contexts/user-store/index'

const Profile: React.FC = () => {
  const { isLoggedIn } = useUser()

  return isLoggedIn ? <LoggedInHeader /> : <LoggedOutHeader />
}

export default Profile
