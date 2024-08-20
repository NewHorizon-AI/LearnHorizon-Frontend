import React from 'react'
import Header from './components/Header'

interface RootLayoutProps {
  children: React.ReactNode
}

const CreateArticleLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default CreateArticleLayout
