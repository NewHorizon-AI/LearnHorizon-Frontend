/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/RIgOyv1UaQX
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "@/components/ui/button"

export function Carousel() {
  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden">
        <img
          alt="Slide 1"
          className="w-full"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: "1160/400",
            objectFit: "cover",
          }}
          width="1160"
        />
        <img
          alt="Slide 2"
          className="w-full"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: "1160/400",
            objectFit: "cover",
          }}
          width="1160"
        />
        <img
          alt="Slide 3"
          className="w-full"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: "1160/400",
            objectFit: "cover",
          }}
          width="1160"
        />
      </div>
      <div className="absolute inset-0 flex justify-between items-center">
        <Button className="left-4" variant="ghost">
          <ChevronLeftIcon className="text-white" />
        </Button>
        <Button className="right-4" variant="ghost">
          <ChevronRightIcon className="text-white" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <Button className="w-2 h-2 bg-white rounded-full" variant="ghost" />
        <Button className="w-2 h-2 bg-white rounded-full" variant="ghost" />
        <Button className="w-2 h-2 bg-white rounded-full" variant="ghost" />
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded-lg text-white">
        <h2 className="text-3xl font-bold mb-2">Becoming Visible: Bringing American Women’s History into Focus</h2>
        <p>Discover how women’s histories have been recorded, remembered, lost, and recovered.</p>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
