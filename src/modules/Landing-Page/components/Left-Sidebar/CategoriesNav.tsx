import React from 'react'
import { IoMap as MapIcon } from 'react-icons/io5'
import Link from 'next/link'

import { type ICategory } from '@/interfaces/IBackend'

export default function CategoriesNav({
  categories
}: {
  categories: ICategory[]
}): React.JSX.Element {
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
            href="#"
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
