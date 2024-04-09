import React from "react";
// Asegúrate de que Button está importado correctamente según tu estructura de archivos
import { Button } from "@/components/ui/button";

const IntroSection = () => {
  const navigationButtons = [
    "PRELUDIO",
    "PROYECTO",
    "COLECCIONES",
    "EQUIPO",
    "NOTICIAS",
    "CONTACTO",
  ];

  return (
    <div className="">
      <nav className="flex justify-center space-x-4 py-4">
        {/* Utilizando los botones de ShadCN */}
        {navigationButtons.map((buttonText) => (
          <Button key={buttonText} variant="outline">
            {buttonText}
          </Button>
        ))}
      </nav>
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">
          Bienvenidos a la biblioteca de modelos 3D
        </h1>
        <hr className="border-gray-400 mx-auto w-1/4" />
        <p className="mt-4 mx-auto leading-relaxed max-w-4xl text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas
          enim a nulla faucibus maximus. Nunc non ligula gravida, pellentesque
          ipsum eu, rutrum justo. Aenean et ipsum eros. Mauris porta turpis
          diam, a consequat libero iaculis eu. In luctus.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
