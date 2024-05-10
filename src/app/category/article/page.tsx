'use client'

import React from 'react'

import NavBar from '@/components/navbar/NavBar'
import Article from '@/components/article/ArticlePage'
import Footer from '@/components/landingPage/landingContent/Footer'

export default function Category(): React.JSX.Element {
  return (
    <>
      <NavBar />
      <main>
        <Article />
        <Footer />
      </main>
    </>
  )
}
