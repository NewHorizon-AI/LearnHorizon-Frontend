import React from 'react'
// import { Button } from '@/components/ui/button'

function IntroSection(): React.JSX.Element {
  // const navigationButtons = [
  //   'PRELUDIO',
  //   'PROYECTO',
  //   'COLECCIONES',
  //   'EQUIPO',
  //   'NOTICIAS',
  //   'CONTACTO'
  // ]

  return (
    <section className="mx-auto container px-4 sm:px-6 lg:px-16">
      {/* Sección de navegación */}
      {/* <nav className="flex justify-center py-4 overflow-auto w-full">
        <div className="flex space-x-4 max-w-full flex-nowrap whitespace-nowrap">
          {navigationButtons.map((buttonText) => (
            <Button key={buttonText} variant="outline" size={'sm'}>
              {buttonText}
            </Button>
          ))}
        </div>
      </nav> */}
      {/* Contenido de la sección de introducción */}
      <div className="text-center py-10 ">
        {/* Título de la sección */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 ">
          Bienvenidos a la biblioteca de modelos 3D
        </h1>
        {/* Subtítulo de la sección */}
        <hr className="border-gray-400 mx-auto w-3/4 " />

        <p className="mt-4 leading-relaxed text-sm sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas
          enim a nulla faucibus maximus. Nunc non ligula gravida, pellentesque
          ipsum eu, rutrum justo. Aenean et ipsum eros. Mauris porta turpis
          diam, a consequat libero iaculis eu. In luctus.
        </p>
      </div>
    </section>
  )
}

export default IntroSection
