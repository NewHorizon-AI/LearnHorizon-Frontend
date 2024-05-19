import Image from 'next/image'
import React from 'react'

export default function Display({
  modelData
}: {
  modelData: string
}): React.JSX.Element {
  return (
    <section className="bg-black">
      <div className="flex items-center justify-center">
        <div className="relative w-full lg:max-w-[140vh]  aspect-video">
          <Image
            src={modelData}
            alt="Video Thumbnail"
            className="absolute inset-0 object-cover object-center"
            fill
          />
        </div>
      </div>
    </section>
  )
}
