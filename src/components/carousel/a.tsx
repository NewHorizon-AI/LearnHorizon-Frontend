import React from "react";

import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <img
          alt="Slide 1"
          className="block w-full h-auto"
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
          className="block w-full h-auto"
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
          className="block w-full h-auto"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: "1160/400",
            objectFit: "cover",
          }}
          width="1160"
        />
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <Button className="text-white bg-opacity-50 bg-black rounded-full p-4">
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
        <Button className="text-white bg-opacity-50 bg-black rounded-full p-4">
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span className="block w-3 h-3 bg-white rounded-full" />
        <span className="block w-3 h-3 bg-white rounded-full opacity-50" />
        <span className="block w-3 h-3 bg-white rounded-full opacity-50" />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-black bg-opacity-75 text-white p-4 rounded-md">
          <h2 className="text-3xl font-bold mb-2">
            Becoming Visible: Bringing American Womens History into Focus
          </h2>
          <p>
            Discover how womens histories have been recorded, remembered, lost,
            and recovered.
          </p>
        </div>
      </div>
    </div>
  );
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
  );
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
  );
}
