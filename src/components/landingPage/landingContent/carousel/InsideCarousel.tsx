import React from 'react'
import Image from 'next/image'

import { type CarouselItemInterface } from '@/interface/CarouselItem'

interface CustomCarouselProps {
  carouselItem: CarouselItemInterface
}

const InsideCarousel: React.FC<CustomCarouselProps> = ({ carouselItem }) => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden m-0 p-0">
      <div className="absolute w-full h-full m-0 p-0">
        <Image
          src={carouselItem.image}
          alt={`Slide ${carouselItem.text}`}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="sm:hidden flex">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center">
            <div className="text-white text-xl font-bold">
              {carouselItem.title}
            </div>
            <p className="text-white">{carouselItem.text}</p>
          </div>
        </div>
      </div>
      <div className="sm:flex hidden">
        <div className="absolute bottom-0 left-0 w-1/2 p-2 ml-16 lg:ml-20 mb-8 md:py-4 lg:py-6 bg-black bg-opacity-50 border border-white">
          <div className="text-left">
            <div className="text-white text-xl md:text-2xl font-bold">
              {carouselItem.title}
            </div>
            <p className="text-white md:text-lg">{carouselItem.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsideCarousel
