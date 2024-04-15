import React from 'react'
import { IoMap as MapIcon } from 'react-icons/io5' // Asegúrate de tener instalado react-icons
import Link from 'next/link' // Asumiendo que estás usando Next.js

interface Category {
  name: string
  count: number
}

const categories: Category[] = [
  { name: 'All', count: 102 },
  { name: 'Beach', count: 20 },
  { name: 'Mountain', count: 35 },
  { name: 'City', count: 47 },
  { name: 'Adventure', count: 18 }
]

const CategoriesNav: React.FC = () => {
  return (
    <div className="space-y-4 lg:col-span-1">
      <div className="flex items-center space-x-3">
        <MapIcon className="w-5 h-5 bg-gray-200 rounded-lg p-3 dark:bg-gray-800 dark:bg-opacity-70" />
        <h3 className="text-2xl font-bold tracking-tighter">Categorías</h3>
      </div>
      <nav className="grid gap-1">
        {categories.map((category) => (
          <Link
            key={category.name}
            href="#" // Aquí puedes añadir la lógica de enrutamiento específico para cada categoría
            className="flex items-center space-x-2 text-base font-medium rounded-md hover:translate-x-2 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          >
            <span>{category.name}</span>
            <span className="text-sm font-normal leading-none translate-y-1">
              ({category.count})
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default CategoriesNav
