'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import BlankLayout from '@/layouts/blank-layout/BlankLayout'

import LoginForm from './components/LoginForm'

import useUser from '@/contexts/user-store/index'

const LoginModule: React.FC = () => {
  const { isLoggedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn, router])

  // Retorna null o un loader mientras se redirige al usuario
  if (isLoggedIn) {
    return null // O un componente de carga si prefieres
  }

  return (
    <BlankLayout>
      <div className="flex justify-center items-center h-screen">
        <LoginForm />
      </div>
    </BlankLayout>
  )
}

export default LoginModule
