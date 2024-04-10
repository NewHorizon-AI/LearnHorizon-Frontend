"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { type CarouselApi } from "@/components/ui/carousel";

import { CarouselItemInterface } from "@/interface/CarouselItem";

interface CustomCarouselProps {
  carouselData: CarouselItemInterface[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ carouselData }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  // Estado para el índice actual del carrusel
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className="" setApi={setApi} plugins={[plugin.current]}>
      <CarouselContent>
        {carouselData.map((item) => (
          <CarouselItem
            className=" flex items-center justify-center w-ful"
            key={item.id}
          >
            <div
              style={{ position: "relative", width: "100vw", height: "50vh" }}
            >
              <Image
                src={item.image} // Asegúrate de que 'item.image' sea una URL válida
                alt={`Slide ${item.text}`} // Proporciona un texto alternativo descriptivo
                layout="fill" // La imagen se expandirá para cubrir el área del contenedor
                className="object-cover object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 z-10" />
      <CarouselNext className="absolute right-0 z-10" />
    </Carousel>
  );
};

export default CustomCarousel;

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
