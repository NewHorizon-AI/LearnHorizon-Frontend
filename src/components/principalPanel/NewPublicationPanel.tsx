import React from 'react'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Component(): React.JSX.Element {
  return (
    <Card>
      <CardHeader className="grid gap-1">
        <div className="flex items-center gap-2">
          <CardTitle>Introducing Shadcn</CardTitle>
          <Badge>Nuevo</Badge>
        </div>
        <CardDescription>
          A new design system for the modern web
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <CalendarIcon className="w-4 h-4" />
            15 de junio de 2023
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TagsIcon className="w-4 h-4" />
            Diseño, Componentes, Web
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Button size="sm">
            <ThumbsUpIcon className="w-4 h-4 mr-2" />
            Me gusta
          </Button>
          <Button size="sm">
            <ThumbsDownIcon className="w-4 h-4 mr-2" />
            No me gusta
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function CalendarIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function TagsIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
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
      <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z" />
      <path d="M6 9.01V9" />
      <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
    </svg>
  )
}

function ThumbsDownIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
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
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}

function ThumbsUpIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}
