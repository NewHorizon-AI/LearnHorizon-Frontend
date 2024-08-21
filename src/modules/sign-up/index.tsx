import React from 'react'

// * Importar el layout principal
import MainLayout from '@/layouts/Main-Layout/MainLayout'

// * Importar Componentes
import SignUp from './components/SignUp'

const SignUpModule: React.FC = () => {
  /*
   * Implementar el módulo de registro
   */

  return (
    <MainLayout>
      <SignUp />
    </MainLayout>
  )
}

export default SignUpModule
