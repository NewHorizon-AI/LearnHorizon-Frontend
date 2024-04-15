import React from 'react'

import CategoriesNav from './CategoriesNav'
import PublicationDisplay from './PublicationDisplay'

export default function PrincipalPanel(): React.JSX.Element {
  return (
    <section className="container grid gap-6 px-4 lg:grid-cols-6 lg:gap-10 sm:px-6 lg:px-16">
      <CategoriesNav />
      <PublicationDisplay />
    </section>
  )
}
