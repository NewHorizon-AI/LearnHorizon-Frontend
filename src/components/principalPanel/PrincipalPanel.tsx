import React from 'react'

import CategoriesNav from './CategoriesNav'
import PublicationDisplay from './PublicationDisplay'

export default function PrincipalPanel(): React.JSX.Element {
  return (
    <section className="container min-h-screen flex flex-col gap-6 px-4 sm:px-6 lg:px-16 lg:flex-row">
      <div className="flex-none">
        <CategoriesNav />
      </div>
      <div className="flex-grow">
        <PublicationDisplay />
      </div>
    </section>
  )
}
