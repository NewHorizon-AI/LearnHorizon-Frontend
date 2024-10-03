'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// * Importar el layout principal
import BlankLayout from '@/layouts/blank-layout/BlankLayout'

// * Importar Componentes
import SignUpForm from './components/SignUpForm'

// * Importar Hook para saber si el usuario está loggeado
import useUser from '@/contexts/user-store/index'

const SignUpModule: React.FC = () => {
  /*
   * Módulo de registro de un usuario
   TODO: Implementar nextAuth para manejar el inicio de sesión en vez de zustand
   */

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
        <SignUpForm />
      </div>
    </BlankLayout>
  )
}

export default SignUpModule
