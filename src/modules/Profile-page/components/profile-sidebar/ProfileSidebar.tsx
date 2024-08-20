import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineCalendar,
  AiOutlineLink,
  AiOutlineEnvironment
} from 'react-icons/ai'
import Link from 'next/link'
import data from '@/data/profiledata/profilemeanwhiledata.json'

const ProfileSidebar: React.FC = () => {
  const { user } = data

  return (
    <div className="flex flex-col items-start gap-6 border-r bg-background px-6 py-8 md:w-80 md:shrink-0">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={user.avatar} alt={user.username} />
          <AvatarFallback>{user.username[0]}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <div className="text-xl font-bold">{user.name}</div>
          <div className="text-sm text-muted-foreground">{user.username}</div>
        </div>
      </div>
      <div className="grid gap-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineEnvironment className="h-4 w-4" />
          <span>{user.location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineCalendar className="h-4 w-4" />
          <span>{user.joined}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineLink className="h-4 w-4" />
          <Link href="#" className="underline" prefetch={false}>
            {user.website}
          </Link>
        </div>
      </div>
      <Separator />
      <div className="grid gap-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineUser className="h-4 w-4" />
          <span>{user.followers} Followers</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineUser className="h-4 w-4" />
          <span>{user.following} Following</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineBook className="h-4 w-4" />
          <span>{user.bookmarks} Bookmarks</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar
