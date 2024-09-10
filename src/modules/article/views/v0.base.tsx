// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// export default function ArticleView() {
//   return (
//     <div className="flex flex-col min-h-screen bg-background">
//       {/* Marco superior con imagen */}
//       <div className="w-full h-48 md:h-64 lg:h-80 relative">
//         <img
//           src="/placeholder.svg?height=400&width=1200"
//           alt="Imagen de cabecera del artículo"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
//             Título Principal del Artículo
//           </h1>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row flex-1">
//         {/* Barra lateral izquierda */}
//         <aside className="w-full md:w-64 border-b md:border-r border-border p-4">
//           <h2 className="text-lg font-semibold mb-4">Menú</h2>
//           <nav className="space-y-2">
//             <a href="#" className="block p-2 hover:bg-accent rounded-md">
//               Inicio
//             </a>
//             <a href="#" className="block p-2 hover:bg-accent rounded-md">
//               Categorías
//             </a>
//             <a href="#" className="block p-2 hover:bg-accent rounded-md">
//               Sobre nosotros
//             </a>
//             <a href="#" className="block p-2 hover:bg-accent rounded-md">
//               Contacto
//             </a>
//           </nav>
//         </aside>

//         {/* Área central del artículo */}
//         <main className="flex-1 p-6 overflow-auto">
//           <article className="max-w-3xl mx-auto">
//             <h2 className="text-2xl font-bold mb-4">Contenido del Artículo</h2>
//             <p className="text-muted-foreground mb-4">
//               Fecha de publicación: 1 de enero, 2023
//             </p>
//             <p className="mb-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//             <p className="mb-4">
//               Duis aute irure dolor in reprehenderit in voluptate velit esse
//               cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//               cupidatat non proident, sunt in culpa qui officia deserunt mollit
//               anim id est laborum.
//             </p>
//             <p>
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//               accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//               quae ab illo inventore veritatis et quasi architecto beatae vitae
//               dicta sunt explicabo.
//             </p>
//           </article>
//         </main>

//         {/* Barra lateral derecha */}
//         <aside className="w-full md:w-64 border-t md:border-l border-border p-4">
//           <div className="mb-6">
//             <img
//               src="/placeholder.svg?height=200&width=200"
//               alt="Imagen del artículo"
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Autores</h3>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-4">
//                 <Avatar>
//                   <AvatarImage
//                     src="/placeholder.svg?height=40&width=40"
//                     alt="@autor1"
//                   />
//                   <AvatarFallback>A1</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-medium">Autor Uno</p>
//                   <p className="text-sm text-muted-foreground">
//                     Escritor Principal
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Avatar>
//                   <AvatarImage
//                     src="/placeholder.svg?height=40&width=40"
//                     alt="@autor2"
//                   />
//                   <AvatarFallback>A2</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-medium">Autor Dos</p>
//                   <p className="text-sm text-muted-foreground">Editor</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   )
// }
