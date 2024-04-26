import React from 'react'

// Importando componentes
import CategoriesNav from './explorer/CategoriesNav'

import { ModelsDisplay } from '@/components/ui/modelsDisplay'

import { SearchBar } from '@/components/ui/searchBar'

// Importando tipos
import { IModelCard, IFindModels, ICategory } from '@/interface/IBackend'

export default function ModelExplorer({
  models,
  setModels,
  categories
}: {
  models: IModelCard[]
  setModels: React.Dispatch<React.SetStateAction<IFindModels>>
  categories: ICategory[]
}): React.JSX.Element {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      <div className="">
        <CategoriesNav categories={categories} />
      </div>

      <div className="flex-grow sm:container">
        <SearchBar className="pb-4" />
        <ModelsDisplay models={models} />
      </div>
    </section>
  )
}
