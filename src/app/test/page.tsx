/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'
import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { type IPublicationCard } from '@/interface/IBackend'
import PublicationCard from '@/components/principalPanel/PublicationCard'

const PublicationDisplay: React.FC = () => {
  const [publications, setPublications] = useState<IPublicationCard[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const [page, _setPage] = useState(0)
  const [pageSize, _setPageSize] = useState(10)
  const [order, _setOrder] = useState<'ascendant' | 'descendant'>('descendant')

  const fetchPublications = useCallback(async (): Promise<void> => {
    setLoading(true)
    try {
      const response = await fetch(
        `/api/publication?page=${page}&pageSize=${pageSize}&order=${order}`
      )
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: IPublicationCard[] = await response.json()
      setPublications(data)
    } catch (error) {
      setError('Failed to fetch publications. Please try again later.')
    } finally {
      setLoading(false)
    }
  }, [page, pageSize, order])

  useEffect(() => {
    fetchPublications()
  }, [fetchPublications])

  if (error != null) return <div>Error: {error}</div>
  if (loading) return <div>Loading...</div>

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {publications.map((publication) => (
        <Link key={publication._id} href={`/publication/${publication._id}`}>
          <div className="flex-none w-96">
            <PublicationCard {...publication} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PublicationDisplay
