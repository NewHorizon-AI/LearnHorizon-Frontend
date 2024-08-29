import React from 'react'

import { Button } from '@/components/ui/button'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

// * Importar componentes necesarios
import ArticleList from '../list-articles/ArticleList'

const ArticleContent: React.FC = () => {
  return (
    <div className="flex-1 p-6 md:p-8">
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <Button className=" hover:bg-slate-800">Create new post</Button>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search posts..."
                className="pl-10 pr-4 py-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Lista de publicaciones */}
          <ArticleList />
        </div>
      </main>
    </div>
  )
}

export default ArticleContent
