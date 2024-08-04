// ! Cambiar quien es el autor de un artículo, por el usuario que está logueado

'use client'

import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface ApiButtonProps {
  children: React.ReactNode
  url?: string
}

const ApiButton: React.FC<ApiButtonProps> = ({ children, url }) => {
  const handleClick = async (): Promise<void> => {
    try {
      const response = await fetch('/api/article/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          users: ['6696d2c44794609ac5de09a9']
        })
      })
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const result = await response.json()
      console.log('Success:', result)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <Button
      onClick={() => {
        void handleClick()
      }}
    >
      {url != null ? <Link href={url}>{children}</Link> : children}
    </Button>
  )
}

export default ApiButton
