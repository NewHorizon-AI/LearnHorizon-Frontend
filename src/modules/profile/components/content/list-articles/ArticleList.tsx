import React, { useState } from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Share2, Pencil, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

const ArticleList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800'
      case 'draft':
        return 'bg-yellow-100 text-yellow-800'
      case 'deleted':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const posts = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Content of post 1',
      createdAt: '2023-06-15',
      status: 'published'
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Content of post 2',
      createdAt: '2023-06-20',
      status: 'draft'
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'Content of post 3',
      createdAt: '2023-06-25',
      status: 'deleted'
    },
    {
      id: 4,
      title: 'Post 4',
      content: 'Content of post 4',
      createdAt: '2023-06-30',
      status: 'published'
    },
    {
      id: 5,
      title: 'Post 5',
      content: 'Content of post 5',
      createdAt: '2023-07-05',
      status: 'published'
    },
    {
      id: 6,
      title: 'Post 6',
      content: 'Content of post 6',
      createdAt: '2023-07-10',
      status: 'draft'
    }
  ]

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <div className="space-y-6">
        {currentPosts.map((post) => (
          <Card
            key={post.id}
            className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {post.title}
                </CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-gray-500">
                    {post.createdAt}
                  </span>
                  <Badge className={getStatusColor(post.status)}>
                    {post.status}
                  </Badge>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" aria-label="Edit post">
                  <Pencil className="h-5 w-5 text-blue-600" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Delete post">
                  <Trash2 className="h-5 w-5 text-red-600" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage(Math.min(currentPage + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}

export default ArticleList
