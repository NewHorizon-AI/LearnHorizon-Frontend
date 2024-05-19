import React from 'react'

export default function SidebarRight(): React.JSX.Element {
  return (
    <aside className="w-1/5 bg-gray-200  p-6 my-8 overflow-y-auto hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Acceso Rápido</h2>
      <div className=" p-4 rounded-md">
        <img
          src="/path/to/image.png"
          alt="Figura del cuerpo humano"
          className="w-full"
        />
        <p className="mt-2">Seleccione una zona</p>
      </div>
      {/* Agrega más contenido aquí si es necesario */}
    </aside>
  )
}
