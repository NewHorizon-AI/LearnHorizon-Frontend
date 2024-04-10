'use client'

import React from 'react'

import NavBar from '@/components/navbar/NavBar'
import CategoryView from '@/components/categoryView/CategoryView'
import Footer from '@/components/footer/Footer'

export default function Category(): React.JSX.Element {
  return (
    <>
      <NavBar />
      <main>
        <CategoryView />
        <Footer />
      </main>
    </>
  )
}
