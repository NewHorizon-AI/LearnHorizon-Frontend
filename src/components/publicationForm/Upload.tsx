import React from 'react'
import { type IFile } from '@/interfaces/formData/INewPublication'

const Upload: React.FC<IFile> = ({ file }) => (
  <div>
    <input
      type="file"
      onChange={(e) => {
        if (e.target.files?.[0] != null) {
          file.setValue(e.target.files[0])
        }
      }}
    />
  </div>
)

export default Upload
