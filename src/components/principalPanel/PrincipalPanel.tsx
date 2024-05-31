import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CardHeader, CardContent, Card } from '@/components/ui/card'
import { type JSX, type SVGProps } from 'react'

import { type ICategory } from '@/interface/IBackend'

function CategoryList({}): React.JSX.Element {
  return (
    <Link
      className="flex items-center space-x-2 text-base font-medium rounded-md hover:translate-x-2 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
      href="#"
    >
      <span>All</span>
      <span className="text-sm font-normal leading-none translate-y-1">
        (102)
      </span>
    </Link>
  )
}

export default function PrincipalPanel(): React.JSX.Element {
  const [categories, setCategories] = useState<ICategory[]>([])

  const fetchCategories = async (): Promise<void> => {
    try {
      const response = await fetch('https://localhost:3001/category')
      const data: ICategory[] = await response.json()
      setCategories(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    void fetchCategories()
  }, [])

  return (
    <div className="container grid gap-6 px-4 lg:grid-cols-6 lg:gap-10 xl:px-6">
      <div className="space-y-4 lg:col-span-1">
        <div className="flex items-center space-x-3">
          <MapIcon className="w-5 h-5 bg-gray-200 rounded-lg p-3 dark:bg-gray-800 dark:bg-opacity-70" />
          <h3 className="text-2xl font-bold tracking-tighter">Categories</h3>
        </div>
        <nav className="grid gap-1">
          <Link
            className="flex items-center space-x-2 text-base font-medium rounded-md hover:translate-x-2 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            <span>All</span>
            <span className="text-sm font-normal leading-none translate-y-1">
              (102)
            </span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-base font-medium rounded-md hover:translate-x-2 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            <span>Beach</span>
            <span className="text-sm font-normal leading-none translate-y-1">
              (20)
            </span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-base font-medium rounded-md hover:translate-x-2 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            <span>Mountain</span>
            <span className="text-sm font-normal leading-none translate-y-1">
              (35)
            </span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-base font-medium rounded-md hover:translate-x-2 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            <span>City</span>
            <span className="text-sm font-normal leading-none translate-y-1">
              (47)
            </span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-base font-medium rounded-md hover:translate-x-2 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            <span>Adventure</span>
            <span className="text-sm font-normal leading-none translate-y-1">
              (18)
            </span>
          </Link>
        </nav>
      </div>
      <div className="lg:col-span-5">
        <div className="flex flex-col min-h-[400px] gap-4">
          <div className="border rounded-lg" />
          <div className="flex items-center rounded-lg border">
            <SearchIcon className="m-2 h-6 w-6 opacity-50" />
            <Input
              className="flex-1 w-full min-w-0 border-0 box-border rounded-r-none appearance-none bg-gray-50 dark:bg-gray-800"
              placeholder="Search tours..."
              type="search"
            />
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <UmbrellaIcon className="w-8 h-8" />
                    <h3 className="text-lg font-bold">Beach</h3>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h4 className="font-semibold">Paradise Island</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experience the beauty of this island with pristine beaches.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <MountainIcon className="w-8 h-8" />
                    <h3 className="text-lg font-bold">Mountain</h3>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h4 className="font-semibold">Majestic Peaks</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Trek through breathtaking mountains and lush valleys.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <BuildingIcon className="w-8 h-8" />
                    <h3 className="text-lg font-bold">City</h3>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h4 className="font-semibold">Urban Exploration</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Discover the vibrant culture and landmarks of the city.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <BackpackIcon className="w-8 h-8" />
                    <h3 className="text-lg font-bold">Adventure</h3>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h4 className="font-semibold">Extreme Expeditions</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Embark on thrilling adventures with expert guides.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button className="w-full max-w-xs" variant="outline">
              View All Tours
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function BackpackIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
): React.JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M8 10h8" />
      <path d="M8 18h8" />
    </svg>
  )
}

function BuildingIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
): React.JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}

function MapIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
): React.JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  )
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
): React.JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function SearchIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
): React.JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function UmbrellaIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
): React.JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </svg>
  )
}
