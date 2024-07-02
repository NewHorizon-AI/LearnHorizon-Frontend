import React from 'react'

interface FileViewProps {
  file: File | null
  onRemoveFile: () => void
}

const FileView: React.FC<FileViewProps> = ({ file, onRemoveFile }) => {
  return (
    <div className="w-full h-full bg-blue-500 flex flex-col items-center justify-center">
      <div className="text-white">{file?.name}</div>
      <button
        onClick={onRemoveFile}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Eliminar archivo
      </button>
    </div>
  )
}

export default FileView
