'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AtSign, User, Lock } from 'lucide-react'
import { loginUser } from '@/lib/apiUser/loginUser'
import useLoginUserForm from '@/hooks/user/login/useLoginUserForm'

const LoginForm: React.FC = () => {
  const [identifier, setIdentifier] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState('')

  const { handleChange } = useLoginUserForm()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (identifier === '' || password === '') {
      setError('Por favor, completa todos los campos.')
      return
    }

    try {
      await loginUser()

      router.push('/') // Redirige tras un inicio de sesión exitoso
      setError('')
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      setError('Error al iniciar sesión. Por favor, intenta de nuevo.')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-background">
      <h2 className="text-2xl font-bold text-center text-foreground">
        Iniciar Sesión
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username" className="text-foreground">
            Nombre de usuario o correo electrónico
          </Label>
          <div className="relative">
            <Input
              id="username"
              name="identifier"
              type="text"
              placeholder="usuario@ejemplo.com o nombreusuario"
              value={identifier}
              onChange={(e) => {
                setIdentifier(e.target.value)
                handleChange(e)
              }}
              className="pl-10 pr-3 w-full bg-background border-none shadow-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {identifier.includes('@') ? (
                <AtSign className="h-5 w-5 text-muted-foreground" />
              ) : (
                <User className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-foreground">
            Contraseña
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Ingrese una contraseña"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                handleChange(e)
              }}
              className="pl-10 pr-3 w-full bg-background border-none shadow-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
        {error !== '' && <p className="text-destructive text-sm">{error}</p>}
        <Button type="submit" className="w-full">
          Iniciar Sesión
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
