import React from 'react'

// Importando componentes
import CategoriesNav from './explorer/CategoriesNav'
import { ModelsDisplay } from '@/components/ui/modelsDisplay'
import SearchBar from '../../ui/search'

// Importando tipos
import {
  type IModelCard,
  type IFindModels,
  type ICategory
} from '@/interfaces/IBackend'

export default function ModelExplorer({
  models,
  setModels,
  categories,
  loadingModels,
  errorModels,
  loadingCategories,
  errorCategories
}: {
  models: IModelCard[]
  setModels: React.Dispatch<React.SetStateAction<IFindModels>>
  categories: ICategory[]
  loadingModels: boolean
  errorModels: string | null
  loadingCategories: boolean
  errorCategories: string | null
}): React.JSX.Element {
  // Función para renderizar el contenido
  const renderContent = (
    loading: boolean,
    error: string | null,
    component: React.JSX.Element
  ): React.JSX.Element => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-full">
          Loading...
        </div>
      )
    }
    if (error != null) {
      return (
        <div className="flex items-center justify-center h-full">{error}</div>
      )
    }
    return component
  }

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      <div className="">
        {renderContent(
          loadingCategories,
          errorCategories,
          <CategoriesNav categories={categories} />
        )}
      </div>
      <div className="flex-grow sm:container">
        <SearchBar className="pb-4" />
        {renderContent(
          loadingModels,
          errorModels,
          <ModelsDisplay models={models} />
        )}
      </div>
    </section>
  )
}
