import Image from 'next/image'
import React from 'react'

export default function Display({
  modelData
}: {
  modelData: string
}): React.JSX.Element {
  return (
    <section className="relative w-full h-[76vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={modelData}
          alt="Video Thumbnail"
          className="object-cover object-center"
          layout="fill"
        />
      </div>
    </section>
  )
}
