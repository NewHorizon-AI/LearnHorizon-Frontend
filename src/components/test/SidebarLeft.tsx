import React from 'react'

export default function SidebarLeft(): React.JSX.Element {
  return (
    <aside className="w-1/5 bg-gray-200 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">ESTRUCTURAS ANATÓMICAS</h2>
      <ul className="space-y-2">
        <li>Acueducto del mesencéfalo; Acueducto (Sylvius)</li>
        <li>Adhesio intertalámica; Comisura gris</li>
        <li>Amígdala del cerebelo; Paraflóculo ventral [H IX]</li>
        <li>Archicórtex</li>
        <li>Arteria basilar</li>
        <li>Arteria carótida interna</li>
        <li>Arteria cerebral anterior</li>
        <li>Arteria cerebral media (Sylvian)</li>
        {/* Agrega más ítems según sea necesario */}
      </ul>
    </aside>
  )
}
