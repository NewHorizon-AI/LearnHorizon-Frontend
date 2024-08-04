import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const NotFoundPage = (): React.JSX.Element => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>
            <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              404 - Página no encontrada
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lo sentimos, la página que estás buscando no existe.
          </p>
          <Link href="/" passHref>
            <Button className="mt-4">Volver a la página principal</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotFoundPage
