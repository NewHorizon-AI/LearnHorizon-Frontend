import React from 'react'

const HeaderProfile: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
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
    </div>
  )
}

export default HeaderProfile
