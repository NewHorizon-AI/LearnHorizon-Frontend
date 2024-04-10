'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import { type CarouselApi } from '@/components/ui/carousel'

import { type CarouselItemInterface } from '@/interface/CarouselItem'

import InsideCarousel from './InsideCarousel'

interface CustomCarouselProps {
  carouselData: CarouselItemInterface[]
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ carouselData }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))
  // Estado para el índice actual del carrusel
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>() // API del carrusel
  const [current, setCurrent] = useState(0) // Índice actual del carrusel
  const [count, setCount] = useState(0) // Número total de elementos en el carrusel

  // Referencia para el temporizador de reinicio del autoplay
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (api == null) {
      return
    }

    setCount(api.scrollSnapList().length) // Establece el número total de elementos en el carrusel
    setCurrent(api.selectedScrollSnap() + 1) // Establece el índice actual del carrusel

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1) // Actualiza el índice actual del carrusel
    })
  }, [api])

  // Función para manejar el clic en un puntito
  const goToSlide = (index: number): void => {
    // Detiene el autoplay
    plugin.current.stop()

    // Detiene cualquier temporizador existente para evitar múltiples reinicios
    if (autoplayTimer.current != null) {
      clearTimeout(autoplayTimer.current)
    }
    api?.scrollTo(index)

    // Reinicia el autoplay después de 5 segundos de inactividad
    autoplayTimer.current = setTimeout(() => {
      plugin.current.play()
    }, 5000) // Ajusta el tiempo según sea necesario
  }

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      opts={{
        align: 'center',
        loop: true
      }}
    >
      <CarouselContent className="w-full">
        {carouselData.map((item) => (
          <CarouselItem key={item.id}>
            <InsideCarousel carouselItem={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="sm:flex hidden absolute left-0 z-10 ml-6" />
      <CarouselNext className="sm:flex hidden absolute right-0 z-10 mr-6" />
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index)
            }}
            className={`h-3 w-3 rounded-full ${current === index + 1 ? 'bg-blue-600' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </Carousel>
  )
}

export default CustomCarousel

/* <div>
      <Carousel>
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={item.id}>
              <div className="max-h-96">
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center">
                  <div className="text-white text-xl font-bold">
                    {item.title}
                  </div>
                  <p className="text-white">{item.text}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={() => handleCarouselControl(currentIndex - 1)}
          className="absolute left-0 z-10"
        />
        <CarouselNext
          onClick={() => handleCarouselControl(currentIndex + 1)}
          className="absolute right-0 z-10"
    //     />
    //     {/* Indicadores del carrusel */

//     <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
//       {carouselData.map((_, index) => (
//         <button
//           key={index}
//           onClick={() => setCurrentIndex(index)}
//           className={`h-2 w-2 mx-1 rounded-full ${
//             currentIndex === index ? "bg-white" : "bg-gray-400"
//           }`}
//           aria-current={currentIndex === index ? "true" : "false"}
//           aria-label={`Slide ${index + 1}`}
//         />
//       ))}
//     </div>
//   </Carousel>
// </div> */}
