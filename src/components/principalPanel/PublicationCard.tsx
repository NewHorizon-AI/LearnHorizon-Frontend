import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card' // Asume que Card, CardHeader y CardContent son componentes

const PublicationCard: React.FC<{
  icon: JSX.Element
  title: string
  description: string
}> = ({ icon, title, description }) => (
  <Card>
    <CardHeader className="p-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <Button size="sm" variant="ghost">
          View
        </Button>
      </div>
    </CardHeader>
    <CardContent className="p-4">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </CardContent>
  </Card>
)

export default PublicationCard
