import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import {
  AiOutlineDelete,
  AiOutlineSwap,
  AiOutlinePlus,
  AiOutlineCalendar
} from 'react-icons/ai'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import data from '@/data/profiledata/profilemeanwhiledata.json'

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="mx-auto grid max-w-4xl gap-8">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Posts</h2>
            <Button size="sm" variant="outline">
              <AiOutlinePlus className="h-4 w-4" />
              New Post
            </Button>
          </div>
          {data.posts.map((post) => (
            <Card key={post.content} className="group relative">
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.avatar} alt={post.username} />
                    <AvatarFallback>{post.username[0]}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <div className="text-sm font-medium">{post.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {post.username}
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100"
                    >
                      <AiOutlineSwap className="h-4 w-4" />
                      <span className="sr-only">Delete post</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <AiOutlineDelete className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm">
                  <p>{post.content}</p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AiOutlineCalendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent
