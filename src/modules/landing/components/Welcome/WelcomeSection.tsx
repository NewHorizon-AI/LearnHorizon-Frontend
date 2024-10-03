import React from 'react'

const WelcomeSection: React.FC = () => {
  return (
    <section>
      {/* Contenido de la sección de introducción */}
      <div className="text-center my-10 ">
        {/* Título de la sección */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 ">
          Bienvenidos a la biblioteca de modelos 3D
        </h1>
        {/* Subtítulo de la sección */}
        <div className="border rounded-lg" />
        {/* <p className="mt-4 leading-relaxed text-sm sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas
          enim a nulla faucibus maximus. Nunc non ligula gravida, pellentesque
          ipsum eu, rutrum justo. Aenean et ipsum eros. Mauris porta turpis
          diam, a consequat libero iaculis eu. In luctus.
        </p> */}
      </div>
    </section>
  )
}

export default WelcomeSection
