// src/layouts/MainLayout.jsx
import React from 'react'
import Header from './components/Header'

interface RootLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
