import React from 'react'

interface RootLayoutProps {
  children: React.ReactNode
}

const BlankLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default BlankLayout
