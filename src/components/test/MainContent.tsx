import React from 'react'
import ReactMarkdown from 'react-markdown'

const markdownContent = `
## Anatomía transversal: IRM del encéfalo

- Se realizó una IRM a un sujeto sano, con varias adquisiciones y con diferentes secuencias: eco de espín T1, T2 y FLAIR, eco de gradiente T2, difusión y T1 tras inyección de gadolinio.
- Obtuvimos los 24 cortes axiales del cerebro normal.
- Los datos y las imágenes DICOM se archivaron en nuestro PACS (sistema de archivo y comunicación de imágenes) y se procesaron y exportaron como imágenes JPEG. Los...
`

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-8">
      <div>
        <h1 className="text-3xl font-bold">
          Anatomía del encéfalo (IRM) en cortes axiales
        </h1>
        <p className="mt-2 text-gray-400">
          Antoine MICHEAU, MD , Denis HOA, MD
        </p>
        <p className="mt-1 text-gray-400">
          Fecha de publicación: 9 sept. 2009 | Última actualización: 4 oct. 2022
        </p>
        <a
          href="https://doi.org/10.37019/e-anatomy/49541.es"
          className="text-blue-500"
        >
          https://doi.org/10.37019/e-anatomy/49541.es
        </a>
        <p className="mt-4 text-gray-300">
          Hemos creado un atlas cerebral que es una herramienta interactiva para
          estudiar la anatomía convencional del encéfalo normal, basado en un
          examen mediante imágenes de resonancia magnética del cerebro axial.
          Las estructuras anatómicas y las áreas concretas son visibles como
          imágenes interactivas etiquetadas.
        </p>
      </div>
      <ReactMarkdown className="prose prose-invert mt-8">
        {markdownContent}
      </ReactMarkdown>
    </main>
  )
}

export default MainContent
