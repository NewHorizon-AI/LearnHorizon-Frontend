import React from 'react'

import { LandingModule } from '@/modules/landing/LandingModule'
import { MainLayout } from '@/layouts/main/MainLayout'

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <LandingModule />
    </MainLayout>
  )
}

export default LandingPage
