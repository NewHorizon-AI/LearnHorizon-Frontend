import React from 'react'

// Importando componentes
import CategoriesNav from './explorer/CategoriesNav'
import ExplorerDisplay from './explorer/ExplorerDisplay'
import SearchBar from '@/components/ui/SearchBar'

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
    <section className="container min-h-screen flex flex-col lg:flex-row">
      <div className="flex-none">
        <CategoriesNav categories={categories} />
      </div>
      <div className="flex-grow">
        <div className="pb-4">
          <SearchBar />
        </div>
        <ExplorerDisplay models={models} />
      </div>
    </section>
  )
}
