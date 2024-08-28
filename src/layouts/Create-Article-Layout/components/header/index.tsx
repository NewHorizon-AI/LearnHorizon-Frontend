import React from 'react'

const Header: React.FC = () => {
  return <div>Header</div>
}

export default Header

// 'use client'

// import { useState } from 'react'
// import Header from './Header'
// import LeftSheet from './LeftSheet'

// export default function MainLayout() {
//   const [isLeftSheetOpen, setIsLeftSheetOpen] = useState(false)

//   const toggleLeftSheet = () => setIsLeftSheetOpen(!isLeftSheetOpen)

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header onMenuToggle={toggleLeftSheet} />
//       <LeftSheet
//         isOpen={isLeftSheetOpen}
//         onClose={() => setIsLeftSheetOpen(false)}
//       />
//       <main className="flex-grow bg-gray-100">
//         {/* Main content goes here */}
//       </main>
//     </div>
//   )
// }
