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
import PublicationCard from './PublicationCard'

const PublicationDisplay: React.FC = () => {
  const publications = [
    {
      title: 'Beach',
      icon: <UmbrellaIcon className="w-8 h-8" />,
      description: 'Experience the beauty of this island with pristine beaches.'
    },
    {
      title: 'Mountain',
      icon: <MountainIcon className="w-8 h-8" />,
      description: 'Trek through breathtaking mountains and lush valleys.'
    },
    {
      title: 'City',
      icon: <BuildingIcon className="w-8 h-8" />,
      description: 'Discover the vibrant culture and landmarks of the city.'
    },
    {
      title: 'Adventure',
      icon: <BackpackIcon className="w-8 h-8" />,
      description: 'Embark on thrilling adventures with expert guides.'
    }
  ]

  return (
    <div className="lg:col-span-5">
      <div className="flex flex-col min-h-[400px] gap-4">
        {/* Borde */}
        {/* <div className="border rounded-lg" /> */}
        <div className="flex items-center rounded-lg border">
          <SearchIcon className="m-2 h-6 w-6 opacity-50" />
          <Input
            className="flex-1 w-full min-w-0 border-0 box-border rounded-r-none appearance-none bg-gray-50 dark:bg-gray-800"
            placeholder="Search Publications..."
            type="search"
          />
        </div>
        <div className="grid gap-4">
          {publications.map((publication) => (
            <PublicationCard
              key={publication.title} // Asegúrate de que el key sea único; si los títulos pueden repetirse, usa un id.
              title={publication.title}
              icon={publication.icon}
              description={publication.description}
            />
          ))}
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

export default PublicationDisplay
