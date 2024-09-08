import React from 'react'

// * Importar componentes necesarios
import ArticleList from './list-articles/ArticleList'
import HeaderContent from './header-contet/HeaderContent'

const ProfileContent: React.FC = () => {
  return (
    <div className="flex-1 p-6 ">
      {/* <HeaderContent /> */}
      <ArticleList />
    </div>
  )
}

export default ProfileContent
