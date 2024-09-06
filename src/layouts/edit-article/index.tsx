import React from 'react'

import Layout from './layout/Layout'

interface EditArticleLayoutProps {
  children: React.ReactNode
}

const EditArticleLayout: React.FC<EditArticleLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>
}

export default EditArticleLayout
