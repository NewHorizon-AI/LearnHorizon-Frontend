import Link from 'next/link'

import Display from '@/components/article/modelDisplay/Display'
import ArticleContent from '@/components/article/articleContent/ArticleContent'

export default function Component() {
  return (
    <>
      <main className="">
        <div className="grid gap-6">
          <Display />
          <ArticleContent />
        </div>
      </main>
    </>
  )
}
