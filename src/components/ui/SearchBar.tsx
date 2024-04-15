import React from 'react'
import { IoSearch as SearchIcon } from 'react-icons/io5'
import { Input } from '@/components/ui/input'

const SearchBar: React.FC = () => {
  return (
    <div className="flex-1 mx-4">
      <div className="relative rounded-lg dark:bg-gray-800">
        <SearchIcon className="absolute inset-y-0 inset-x-2.5 top-2.5 translate-x-0.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
        <Input
          className="bg-transparent appearance-none pl-8 sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] bg-gray-100"
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
  )
}

export default SearchBar
