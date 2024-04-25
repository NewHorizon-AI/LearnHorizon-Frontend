import React from 'react'
import Link from 'next/link'

// Importando componentes
import PublicationCard from '@/components/ui/ModelCard'

// Importando tipos
import { IModelCard } from '@/interface/IBackend'

export default function ExplorerDisplay({
  models
}: {
  models: IModelCard[]
}): React.JSX.Element {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 ">
        {models.map((models) => (
          <Link key={models._id} href={`/models/${models._id}`}>
            <div className="flex-none md:w-64 lg:w-80 xl:w-96">
              <PublicationCard {...models} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

//  Para actualizar el estado, puedes hacer algo como esto:
// setState(prevState => ({
//   ...prevState,
//   page: nuevaPagina,
// }));
