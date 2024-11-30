import React from 'react'

interface IHero {
  className?: string
}

const Hero: React.FC<IHero> = (props) => {
  const { className } = props

  return (
    <section className={`${className} bg-slate-300`}>
      <div className="flex items-center space-x-8">
        <h2 className="font-bold text-5xl flex-1">
          Bienvenido a nuestra galeria de modelos 3D
        </h2>

        <p className="leading-relaxed text-base w-2/3">
          En este espacio, encontrarás una amplia variedad de modelos 3D para
          explorar y utilizar en proyectos educativos y de investigación.
          Sumérgete en un fascinante viaje de aprendizaje y creatividad.
        </p>
      </div>
    </section>
  )
}

export { Hero }
