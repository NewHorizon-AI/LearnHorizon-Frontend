import React from 'react'
import {
  IoSearch as SearchIcon,
  IoUmbrella as UmbrellaIcon,
  IoCompass as MountainIcon,
  IoBusiness as BuildingIcon,
  IoBackspace as BackpackIcon
} from 'react-icons/io5' // Asegúrate de tener instalado react-icons
import { Input } from '@/components/ui/input' // Asegúrate de ajustar la importación según la ubicación de tu componente Input
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card' // Asume que Card, CardHeader y CardContent son componentes

const PublicationDisplay: React.FC = () => {
  return (
    <div className="lg:col-span-5">
      <div className="flex flex-col min-h-[400px] gap-4">
        <div className="border rounded-lg" />
        <div className="flex items-center rounded-lg border">
          <SearchIcon className="m-2 h-6 w-6 opacity-50" />
          <Input
            className="flex-1 w-full min-w-0 border-0 box-border rounded-r-none appearance-none bg-gray-50 dark:bg-gray-800"
            placeholder="Search Publications..."
            type="search"
          />
        </div>
        <div className="grid gap-4">
          <PublicationCard
            title="Beach"
            icon={<UmbrellaIcon className="w-8 h-8" />}
            description="Experience the beauty of this island with pristine beaches."
          />
          <PublicationCard
            title="Mountain"
            icon={<MountainIcon className="w-8 h-8" />}
            description="Trek through breathtaking mountains and lush valleys."
          />
          <PublicationCard
            title="City"
            icon={<BuildingIcon className="w-8 h-8" />}
            description="Discover the vibrant culture and landmarks of the city."
          />
          <PublicationCard
            title="Adventure"
            icon={<BackpackIcon className="w-8 h-8" />}
            description="Embark on thrilling adventures with expert guides."
          />
        </div>
        <div className="flex justify-center">
          <Button className="w-full max-w-xs" variant="outline">
            View All Publications
          </Button>
        </div>
      </div>
    </div>
  )
}

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

export default PublicationDisplay
