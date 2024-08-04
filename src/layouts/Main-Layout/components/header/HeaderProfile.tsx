import React from 'react'
import Link from 'next/link'

const HeaderProfile: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="profile">
        <img
          alt="Avatar"
          className="rounded-full"
          src="https://via.placeholder.com/150/771796"
          style={{
            aspectRatio: '1',
            objectFit: 'cover'
          }}
          width="32"
          height="32"
        />
      </Link>
    </div>
  )
}

export default HeaderProfile
