import React from 'react'
import Link from 'next/link'
import { FaBoxOpen } from 'react-icons/fa'

const HeaderLogo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 cursor-pointer">
        <FaBoxOpen className="h-6 w-6" />
        <h1 className="hidden sm:flex text-lg font-bold tracking-tighter">
          Learn Horizon
        </h1>
      </div>
    </Link>
  )
}

export default HeaderLogo
