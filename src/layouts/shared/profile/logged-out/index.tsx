import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const LoggedOutHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Button asChild variant={'ghost'}>
        <Link href="/login">Iniciar sesión</Link>
      </Button>
      <Button asChild>
        <Link href="/signup">Registrarme</Link>
      </Button>
    </div>
  )
}

export default LoggedOutHeader
