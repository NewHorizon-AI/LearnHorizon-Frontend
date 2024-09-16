/* eslint-disable react-hooks/exhaustive-deps */
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
import { type CarouselItemInterface } from '@/interfaces/CarouselItem'
import InsideCarousel from './InsideCarousel'

const useAutoplay = (
  api: CarouselApi | undefined,
  delay: number
): {
  stopAutoplay: () => void
  startAutoplay: () => void
  plugin: React.MutableRefObject<any>
} => {
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

export default function MainCarousel({
  carouselData,
  loadingCarousel,
  errorCarousel
}: {
  carouselData: CarouselItemInterface[]
  loadingCarousel: boolean
  errorCarousel: string | null
}): React.JSX.Element {
  const [api, setApi] = useState<CarouselApi | undefined>()
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

  if (loadingCarousel) {
    return (
      <div className="flex items-center justify-center h-64">Loading...</div>
    )
  }

  if (errorCarousel != null) {
    return (
      <div className="flex items-center justify-center h-64">
        {errorCarousel}
      </div>
    )
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
      <CarouselContent className="w-full m-0 p-0">
        {carouselData.map((item) => (
          <CarouselItem key={item.id} className="m-0 p-0">
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
