'use client'

import React, { useEffect, useState } from 'react'

// * Importar Layout
import MainLayout from '@/layouts/main/index'

import Sidebar from '@/modules/profile/components/sidebar/index'
import Content from '@/modules/profile/components/content/index'

import useUserGetStore from '@/contexts/api/get-user-store/index'

// * Importar fetcher
import { fetchUserProfileData } from '@/lib/apiUser/getUser'

// * Importar vista de carga
import LoadingScreen from '@/components/loading/LoadingScreen'

interface ViewProfileProps {
  username: string
}

const ViewProfile: React.FC<ViewProfileProps> = ({ username }) => {
  const { setUser } = useUserGetStore()
  const [loading, setLoading] = useState(true) // Estado de carga

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const data = await fetchUserProfileData(username)
        setUser(data)
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setLoading(false) // Finaliza la carga después de obtener los datos
      }
    }

    fetchData().catch((error) => {
      console.error('Error fetching user:', error)
    })
  }, [username, setUser])

  // Mostrar animación de carga mientras se obtienen los datos
  if (loading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-screen">
          <LoadingScreen />
        </div>
      </MainLayout>
    )
  }

  // Renderizar el contenido una vez que se hayan obtenido los datos
  return (
    <MainLayout>
      <div className="flex min-h-screen">
        <Sidebar />
        <Content />
      </div>
    </MainLayout>
  )
}

export default ViewProfile
