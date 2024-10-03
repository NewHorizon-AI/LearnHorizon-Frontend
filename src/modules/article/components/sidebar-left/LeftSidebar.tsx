import React from 'react'

function LeftSidebar(): React.JSX.Element {
  return (
    <aside className="w-full md:w-64 border-b md:border-r border-border p-4">
      <h2 className="text-lg font-semibold mb-4">Indice</h2>
      <nav className="space-y-2">
        <a href="#" className="block p-2 hover:bg-accent rounded-md">
          Introduccion
        </a>
        <a href="#" className="block p-2 hover:bg-accent rounded-md">
          Objetivo
        </a>
        <a href="#" className="block p-2 hover:bg-accent rounded-md">
          Desarrollo
        </a>
        <a href="#" className="block p-2 hover:bg-accent rounded-md">
          Conclusion
        </a>
      </nav>
    </aside>
  )
}

export default LeftSidebar
