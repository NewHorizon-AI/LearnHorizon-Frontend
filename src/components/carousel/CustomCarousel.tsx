"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const CustomCarousel = ({ carouselData }) => {
  // Estado para el índice actual del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para actualizar el índice actual al cambiar los controles del carrusel
  const handleCarouselControl = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(carouselData.length - 1);
    } else if (newIndex >= carouselData.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="relative ">
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
        />
        {/* Indicadores del carrusel */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
              aria-current={currentIndex === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
