import React from 'react'
import VideoCard from '@/components/principalPanel/NewPublicationPanel'
const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex space-x-4">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  )
}

export default App
