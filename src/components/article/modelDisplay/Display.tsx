import Image from 'next/image'
import React from 'react'

export default function Display({
  modelData
}: {
  modelData: string
}): React.JSX.Element {
  return (
    <section style={{ position: 'relative', width: '100vw', height: '70vh' }}>
      <div className="absolute w-full h-full">
        <Image
          alt="Video Thumbnail"
          className="object-cover object-center"
          fill
          src={modelData}
        />
      </div>
    </section>
  )
}
