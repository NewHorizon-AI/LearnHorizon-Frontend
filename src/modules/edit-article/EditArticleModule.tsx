import React from 'react'
import EditArticleBody from './components/EditArticleBody'
import CreateArticleLayout from '@/layouts/Create-Article-Layout/CreateArticleLayout'

const EditArticleModule: React.FC = () => {
  return (
    <CreateArticleLayout>
      <EditArticleBody />
    </CreateArticleLayout>
  )
}

export default EditArticleModule
