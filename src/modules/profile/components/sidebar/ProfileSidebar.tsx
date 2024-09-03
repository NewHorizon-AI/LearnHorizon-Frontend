'use client'

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

// * Importar el estado global del usuario
import useUserGetStore from '@/contexts/api/get-user-store'

const ProfileSidebar: React.FC = () => {
  const { userJson } = data

  const { user } = useUserGetStore()

  return (
    <div className="flex flex-col items-start gap-6 border-r bg-background px-6 py-8 md:w-80 md:shrink-0">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={userJson.avatar} alt={userJson.username} />
          <AvatarFallback>{userJson.username[0]}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <div className="text-xl font-bold">{userJson.name}</div>
          <div className="text-sm text-muted-foreground">@{user?.username}</div>
        </div>
      </div>
      <div className="grid gap-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineEnvironment className="h-4 w-4" />
          <span>{userJson.location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineCalendar className="h-4 w-4" />
          <span>{userJson.joined}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineLink className="h-4 w-4" />
          <Link href="#" className="underline" prefetch={false}>
            {userJson.website}
          </Link>
        </div>
      </div>
      <Separator />
      <div className="grid gap-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineUser className="h-4 w-4" />
          <span>{userJson.followers} Followers</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineUser className="h-4 w-4" />
          <span>{userJson.following} Following</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <AiOutlineBook className="h-4 w-4" />
          <span>{userJson.bookmarks} Bookmarks</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar

// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { ScrollArea } from '@/components/ui/scroll-area'
// import {
//   MapPin,
//   Clock,
//   Mail,
//   Share2,
//   Pencil,
//   Trash2,
//   Search
// } from 'lucide-react'

// export default function PerfilUsuario() {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-80 bg-white shadow-lg overflow-y-auto">
//         <ScrollArea className="h-full">
//           <div className="p-6 space-y-6">
//             <div className="relative">
//               <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-xl">
//                 <AvatarImage
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-w08CwCIWtE08w22T7eW5VhvVHGvqzn.png"
//                   alt="@usuario"
//                 />
//                 <AvatarFallback>AD</AvatarFallback>
//               </Avatar>
//               <div className="absolute bottom-0 right-1/3 bg-blue-500 rounded-full p-1 border-2 border-white">
//                 <span className="text-white text-xs">👑</span>
//               </div>
//             </div>
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-gray-800">
//                 Alejandro Diaz
//               </h2>
//               <p className="text-blue-600 font-medium">@IxyzDev</p>
//             </div>
//             <p className="text-center text-gray-600 text-sm">
//               👨‍🎓 Estudiante de Ingeniería Civil Informática 👨‍💻, futuro full
//               stack developer.
//             </p>
//             <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
//               Edit profile
//             </Button>
//             <div className="flex justify-center space-x-4 text-sm text-gray-600">
//               <span>2 followers</span>
//               <span>•</span>
//               <span>3 following</span>
//             </div>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <MapPin className="w-4 h-4 text-blue-500" />
//                 <span className="text-sm">Chile/Valparaíso</span>
//               </div>
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <Clock className="w-4 h-4 text-blue-500" />
//                 <span className="text-sm">10:36 (UTC -04:00)</span>
//               </div>
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <Mail className="w-4 h-4 text-blue-500" />
//                 <span className="text-sm">ixyz.dev@gmail.com</span>
//               </div>
//             </div>
//             <div>
//               <h3 className="font-bold text-gray-800 mb-3">Achievements</h3>
//               <div className="flex space-x-3">
//                 <span className="bg-yellow-100 text-yellow-800 rounded-full p-2 shadow">
//                   🏆
//                 </span>
//                 <span className="bg-blue-100 text-blue-800 rounded-full p-2 shadow">
//                   🌟
//                 </span>
//                 <span className="bg-green-100 text-green-800 rounded-full p-2 shadow">
//                   💡
//                 </span>
//               </div>
//             </div>
//           </div>
//         </ScrollArea>
//       </aside>

//       {/* Contenido principal */}
//       <main className="flex-1 overflow-y-auto">
//         <div className="p-8 max-w-3xl mx-auto">
//           <div className="mb-8 flex justify-between items-center">
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//               Create new post
//             </Button>
//             <div className="relative">
//               <Input
//                 type="search"
//                 placeholder="Search posts..."
//                 className="pl-10 pr-4 py-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             </div>
//           </div>

//           {/* Lista de publicaciones */}
//           <div className="space-y-6">
//             {[1, 2, 3].map((post) => (
//               <Card
//                 key={post}
//                 className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
//               >
//                 <CardHeader className="flex flex-row items-center justify-between pb-2">
//                   <CardTitle className="text-xl font-semibold text-gray-800">
//                     Post {post}
//                   </CardTitle>
//                   <div className="flex space-x-2">
//                     <Button variant="ghost" size="icon" aria-label="Edit post">
//                       <Pencil className="h-5 w-5 text-blue-600" />
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       aria-label="Delete post"
//                     >
//                       <Trash2 className="h-5 w-5 text-red-600" />
//                     </Button>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 mb-4">
//                     This is the content of post {post}. Here would be the full
//                     text of the user's post. It could be a longer paragraph
//                     discussing various topics or sharing interesting ideas.
//                   </p>
//                   <div className="flex justify-end">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="text-blue-600 border-blue-600 hover:bg-blue-50"
//                     >
//                       <Share2 className="mr-2 h-4 w-4" />
//                       Share
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
