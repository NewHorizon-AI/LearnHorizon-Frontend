import React from 'react'
import ReactMarkdown from 'react-markdown'
import { type IMarkdownFormProps } from '@/interfaces/formData/INewPublication'

const ArticleMarkdown = ({
  markdownContent,
  isPreview
}: IMarkdownFormProps): React.JSX.Element => {
  return (
    <div className="">
      <div className="border rounded-md shadow-sm">
        <div className="flex border-b">
          <button
            className={`flex-1 text-center p-2 ${!isPreview.value ? 'bg-gray-200' : 'bg-white'} border-r`}
            onClick={() => {
              isPreview.setValue(false)
            }}
          >
            Write
          </button>
          <button
            className={`flex-1 text-center p-2 ${isPreview.value ? 'bg-gray-200' : 'bg-white'}`}
            onClick={() => {
              isPreview.setValue(true)
            }}
          >
            Preview
          </button>
        </div>

        <div className="p-4">
          {!isPreview.value ? (
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={markdownContent.value}
              onChange={(e) => {
                markdownContent.setValue(e.target.value)
              }}
              placeholder="Write your markdown here..."
            />
          ) : (
            <div className="prose">
              <ReactMarkdown>{markdownContent.value}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticleMarkdown
