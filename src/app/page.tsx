"use client";

import React, { useState } from "react";

import Image from "next/image";

import NavBar from "@/components/navbar/NavBar";
import CustomCarousel from "@/components/carousel/MainCarousel";
import IntroSection from "@/components/intro/IntroSection";
import PrincipalPanel from "@/components/principalPanel/PrincipalPanel";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

// Importando datos de prueba
import carouselData from "@/data/carouselData.json";

export default function Home() {
  // Manejar el los datos del carrusel

  const [carousel, setCarousel] = useState(carouselData);

  return (
    <>
      <NavBar />
      <main>
        <CustomCarousel carouselData={carousel} />
        <IntroSection />
        <PrincipalPanel />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
