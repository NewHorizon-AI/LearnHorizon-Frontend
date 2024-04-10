import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { type JSX, type SVGProps } from 'react'

export default function Component(): React.JSX.Element {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container grid gap-4 px-4 md:px-6 items-center">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold tracking-tight">
              Summer Collection
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Hot Picks from the Summer Collection: Embrace the Season in Style!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="mx-auto max-w-lg flex items-center rounded-lg border">
            <SearchIcon className="mx-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full rounded-lg appearance-none shadow-none border-0 bg-transparent"
              placeholder="Search items..."
              type="search"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="rounded-lg border border-gray-200 py-2 px-4 dark:border-gray-800"
              href="#"
            >
              All
            </Link>
            <Link
              className="rounded-lg border border-gray-200 py-2 px-4 dark:border-gray-800"
              href="#"
            >
              New Arrivals
            </Link>
            <Link
              className="rounded-lg border border-gray-200 py-2 px-4 dark:border-gray-800"
              href="#"
            >
              Best Sellers
            </Link>
            <Link
              className="rounded-lg border border-gray-200 py-2 px-4 dark:border-gray-800"
              href="#"
            >
              Clearance
            </Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Cover image"
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              height={200}
              src="https://via.placeholder.com/150/f66b97"
              width={200}
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">
                Beach Bliss Flip-Flops
              </h3>
              <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                Comfortable Footwear
              </small>
              <h4 className="font-semibold">$19.99</h4>
            </div>
          </div>
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Cover image"
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              height={200}
              src="https://via.placeholder.com/150/56a8c2"
              width={200}
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">
                Sunset Shades Sunglasses
              </h3>
              <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                UV Protection Eyewear
              </small>
              <h4 className="font-semibold">$29.99</h4>
            </div>
          </div>
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Cover image"
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              height={200}
              src="https://via.placeholder.com/150/810b14"
              width={200}
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">
                Cool Breeze Portable Fan
              </h3>
              <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                On-the-Go Cooling
              </small>
              <h4 className="font-semibold">$14.99</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
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
