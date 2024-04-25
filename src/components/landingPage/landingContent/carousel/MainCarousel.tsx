'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
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

interface MainCarouselProps {
  carouselData: CarouselItemInterface[]
}

const useAutoplay = (api: CarouselApi | undefined, delay: number) => {
  const plugin = useRef(Autoplay({ delay, stopOnInteraction: false }))
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (api == null) {
      return
    }

    plugin.current.play()

    return () => {
      plugin.current.stop()
    }
  }, [api])

  const stopAutoplay = useCallback(() => {
    plugin.current.stop()

    if (autoplayTimer.current != null) {
      clearTimeout(autoplayTimer.current)
    }
  }, [])

  const startAutoplay = useCallback(() => {
    autoplayTimer.current = setTimeout(() => {
      plugin.current.play()
    }, delay)
  }, [delay])

  return { stopAutoplay, startAutoplay, plugin }
}

const MainCarousel: React.FC<MainCarouselProps> = ({ carouselData = [] }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const { stopAutoplay, startAutoplay, plugin } = useAutoplay(api, 5000)

  useEffect(() => {
    if (api == null) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const goToSlide = useCallback(
    (index: number): void => {
      stopAutoplay()
      api?.scrollTo(index)
      startAutoplay()
    },
    [api, stopAutoplay, startAutoplay]
  )

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      opts={{
        align: 'center',
        loop: true
      }}
    >
      <CarouselContent className="w-full ">
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

export default MainCarousel
