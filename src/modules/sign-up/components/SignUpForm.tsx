/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'

import React from 'react'

// * Importar componentes de UI (shadcn)
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

// * Importar el hook para el formulario de registro
import useUserForm from '@/hooks/useUserForm'

// * Importar el hook para hacer el submit del formulario
import { createUser } from '@/lib/apiUser/createUser'

const SignUpForm: React.FC = () => {
  /*
   * Componente que se encarga de renderizar el formulario de registro
   TODO: Revisar posibilidad de remover use client 

  */

  const { handleChange } = useUserForm()

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    await createUser()
  }

  return (
    <div className="mx-auto max-w-md space-y-6 py-24">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Registrarme</h1>
        <p className="text-muted-foreground">
          Crea una nueva nueva cuenta y comienza a disfrutar de nuestros
          servicios
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter a password"
            required
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </div>
  )
}

export default SignUpForm
