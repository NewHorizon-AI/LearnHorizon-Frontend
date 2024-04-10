import React from 'react'
import Image from 'next/image'

import { type CarouselItemInterface } from '@/interface/CarouselItem'

interface CustomCarouselProps {
  carouselItem: CarouselItemInterface // Propiedad para un solo elemento del carrusel
}

const InsideCarousel: React.FC<CustomCarouselProps> = ({ carouselItem }) => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '50vh' }}>
      <Image
        src={carouselItem.image}
        alt={`Slide ${carouselItem.text}`}
        fill
        className="object-cover object-center"
      />
    </div>
  )
}

export default InsideCarousel
