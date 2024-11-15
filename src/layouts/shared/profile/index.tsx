'use client'

import React from 'react'

import LoggedInHeader from './logged-in/index'
import LoggedOutHeader from './logged-out'

import useUser from '@/contexts/user-store/index'

interface ProfileProps {
  className?: string
}

const Profile: React.FC<ProfileProps> = (props) => {
  const { className } = props

  const { isLoggedIn } = useUser()

  return (
    <div className={`${className} flex items-center`}>
      {isLoggedIn ? <LoggedInHeader /> : <LoggedOutHeader />}
    </div>
  )
}

export default Profile
