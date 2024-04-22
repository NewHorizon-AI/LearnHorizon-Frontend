import React, { useState, useEffect } from 'react'
import { IoMap as MapIcon } from 'react-icons/io5'
import Link from 'next/link'

import { type ICategory } from '@/interface/IBackend'
const CategoriesNav: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchCategories = async (): Promise<void> => {
    try {
      const response = await fetch('/api/category')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: ICategory[] = await response.json()
      setCategories(data)
    } catch (error) {
      console.error('Failed to fetch categories:', error)
      setError('Failed to fetch categories. Please try again later.')
    }
  }

  useEffect(() => {
    fetchCategories().catch((error) => {
      console.error('Failed to fetch categories:', error)
    })
  }, [])

  if (error !== null) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="space-y-4 lg:col-span-1">
      <div className="flex items-center space-x-3">
        <MapIcon className="w-5 h-5 bg-gray-200 rounded-lg p-3 dark:bg-gray-800 dark:bg-opacity-70" />
        <h3 className="text-2xl font-bold tracking-tighter">Categorías</h3>
      </div>
      <nav className="grid gap-1">
        {categories.map((category) => (
          <Link
            key={category._id}
            href="#" // Aquí puedes añadir la lógica de enrutamiento específico para cada categoría
            className="flex items-center space-x-2 text-base font-medium rounded-md hover:translate-x-2 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          >
            <span>{category.title}</span>
            <span className="text-sm font-normal leading-none translate-y-1">
              ({category.publicationCount})
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default CategoriesNav
