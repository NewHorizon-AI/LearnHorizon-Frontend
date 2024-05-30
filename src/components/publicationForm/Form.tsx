import React from 'react'
import { type IPublicationFormProps } from '@/interfaces/formData/INewPublication'

const Form: React.FC<IPublicationFormProps> = ({
  title,
  subtitle,
  photo,
  description,
  markdownContent,
  author,
  category
}) => (
  <div>
    <input
      type="text"
      value={title.value}
      onChange={(e) => {
        title.setValue(e.target.value)
      }}
      placeholder="Title"
    />
    <input
      type="text"
      value={subtitle.value}
      onChange={(e) => {
        subtitle.setValue(e.target.value)
      }}
      placeholder="Subtitle"
    />
    <input
      type="text"
      value={photo.value}
      onChange={(e) => {
        photo.setValue(e.target.value)
      }}
      placeholder="Photo URL"
    />
    <input
      type="text"
      value={description.value}
      onChange={(e) => {
        description.setValue(e.target.value)
      }}
      placeholder="Description"
    />
    <textarea
      value={markdownContent.value}
      onChange={(e) => {
        markdownContent.setValue(e.target.value)
      }}
      placeholder="Markdown Content"
    />
    <input
      type="text"
      value={author.value}
      onChange={(e) => {
        author.setValue(e.target.value)
      }}
      placeholder="Author"
    />
    <input
      type="text"
      value={category.value}
      onChange={(e) => {
        category.setValue(e.target.value)
      }}
      placeholder="Category"
    />
  </div>
)

export default Form
