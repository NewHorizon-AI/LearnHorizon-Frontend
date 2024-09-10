import React from 'react'

function RightSidebar(): React.JSX.Element {
  return (
    <aside className="w-full md:w-64 border-t md:border-l border-border p-4">
      <div className="mb-6">
        <img
          src="/placeholder.svg?height=200&width=200"
          alt="Imagen del artículo"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Autores</h3>
        <div className="space-y-4">{/* Autores */}</div>
      </div>
    </aside>
  )
}

export default RightSidebar
