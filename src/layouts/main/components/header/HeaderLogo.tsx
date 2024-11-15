import React from 'react'
import Link from 'next/link'
import { FaBoxOpen } from 'react-icons/fa'

interface HeaderLogoProps {
  className?: string
}

const HeaderLogo: React.FC<HeaderLogoProps> = (props) => {
  const { className } = props

  return (
    <Link href="/" className={`${className} flex `}>
      <div className="flex items-center justify-center">
        <FaBoxOpen className="h-6 w-6" />
        <h1 className="pl-2 hidden sm:flex text-lg font-bold tracking-tighter">
          Learn Horizon
        </h1>
      </div>
    </Link>
  )
}

export default HeaderLogo
