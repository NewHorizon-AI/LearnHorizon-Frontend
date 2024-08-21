import React from 'react'

// * Importar el layout principal
import MainLayout from '@/layouts/Main-Layout/MainLayout'

// * Importar Componentes
import SignUpForm from './components/SignUpForm'

const SignUpModule: React.FC = () => {
  /*
   * Módulo de registro de un usuario
   TODO: Implementar nextAuth para manejar el inicio de sesion en vez de zustand
   */

  return (
    <MainLayout>
      <SignUpForm />
    </MainLayout>
  )
}

export default SignUpModule
