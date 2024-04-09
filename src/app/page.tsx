"use client";

import React, { useState } from "react";

import Image from "next/image";

import NavBar from "@/components/navbar/NavBar";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import IntroSection from "@/components/intro/IntroSection";

// Importando datos de prueba
import carouselData from "@/data/carouselData.json";

export default function Home() {
  // Manejar el los datos del carrusel

  const [carousel, setCarousel] = useState(carouselData);

  return (
    <>
      <main>
        <NavBar />
        <CustomCarousel carouselData={carousel} />
        <IntroSection />
      </main>
    </>
  );
}
