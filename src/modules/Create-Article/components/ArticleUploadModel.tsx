import React from 'react'

import { type IFile } from '@/interfaces/formData/INewPublication'

const Upload: React.FC<IFile> = ({ file }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.[0] != null) {
      file.setValue(e.target.files[0])
    }
  }

  return (
    <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
      <input
        type="file"
        className="hidden"
        id="file-upload"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-col items-center justify-center h-full w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 8a1 1 0 011 1v4h4v-4a1 1 0 112 0v4h2v-4a1 1 0 112 0v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2 2 0 01-2-2H8zm1-6a1 1 0 00-1 1v4a1 1 0 001 1h2a1 1 0 001-1V6a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <span className="mt-2 text-gray-600">
          Haz clic aquí para buscar el archivo
        </span>
      </label>
      {file.value != null && (
        <div className="mt-4 w-full">
          <div className="text-sm text-gray-500">{file.value.name}</div>
        </div>
      )}
    </div>
  )
}

export default Upload
