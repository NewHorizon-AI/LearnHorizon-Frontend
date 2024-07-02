import React from 'react'

import { type IFile } from '@/interfaces/formData/INewPublication'

import { UploadIcon } from '@radix-ui/react-icons'

import parseFile from '../libs/parseFile'

const FileUpload: React.FC<IFile> = ({ file, alert, setAlert }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileExists = e.target.files?.[0]
    if (fileExists != null) {
      const result = parseFile(fileExists)
      setAlert({ ...result.alert })
      console.log(result.alert)
      if (result.valid) {
        file.setValue(fileExists)
      }
    }
  }

  return (
    <div className="w-full h-full">
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
        <UploadIcon className="w-12 h-12 text-gray-600" />
        <span className="mt-2 text-gray-600">
          Haz clic aquí para buscar el archivo
        </span>
      </label>
    </div>
  )
}
export default FileUpload
