import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { type JSX, type SVGProps } from 'react'

function NavBar(): React.JSX.Element {
  return (
    <nav className="flex items-center h-14 px-4 border-b">
      <div className="flex items-center gap-2">
        <PackageIcon className="h-6 w-6" />
        <h1 className="text-lg font-bold tracking-tighter">Learn Horizon</h1>
      </div>
      <div className="flex-1 mx-4">
        <div className="relative rounded-lg  dark:bg-gray-800">
          <SearchIcon className="absolute inset-y-0 inset-x-2.5 top-2.5 translate-x-0.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
          <Input
            className="bg-transparent appearance-none pl-8 sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] bg-gray-100"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <Button size="icon" variant="outline">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button size="icon" variant="outline">
          <SettingsIcon className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>

        <div className="flex items-center gap-2">
          <img
            alt="Avatar"
            className="rounded-full"
            height="32"
            src="https://via.placeholder.com/150/771796"
            style={{
              aspectRatio: '32/32',
              objectFit: 'cover'
            }}
            width="32"
          />
        </div>
      </div>
    </nav>
  )
}

function BellIcon(
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

// function LogOutIcon(
//   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
// ): React.JSX.Element {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//       <polyline points="16 17 21 12 16 7" />
//       <line x1="21" x2="9" y1="12" y2="12" />
//     </svg>
//   )
// }

function PackageIcon(
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
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

function SettingsIcon(
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export default NavBar
