## Estructura de Carpetas

Este documento describe la estructura de carpetas del proyecto, proporcionando una visión clara del propósito de cada módulo y cómo los componentes están organizados.

### 📁 profile

Contiene todos los componentes y vistas relacionados con el perfil de usuario.

- **📁 components**: Carpeta principal para todos los subcomponentes.
  - **📁 content**: Agrupa todos los componentes relacionados con el contenido del perfil.
    - **📁 article-card**: Componente para mostrar tarjetas de artículos.
    - **📁 article-pagination**: Componente para la paginación de artículos.
    - **📁 list-articles**: Componente para listar artículos.
    - **index.tsx**: Archivo de exportación de todos los componentes de `content`.
  - **📁 sidebar**: Contiene todos los componentes relacionados con la barra lateral del perfil.
    - **ProfileSidebar.tsx**: Componente de la barra lateral del perfil.
    - **index.tsx**: Archivo de exportación de `ProfileSidebar`.
  - **📁 view-profile**: Componente de vista que combina varios subcomponentes.
    - **ViewProfile.tsx**: Componente principal que ensambla la vista del perfil.
    - **index.tsx**: Archivo de exportación de `ViewProfile`.
  - **index.tsx**: Archivo de exportación general de `components`.
- **index.tsx**: Archivo de exportación de la carpeta `profile`.

## Ejemplos de Implementación

### Ejemplo Normal

Para usar la vista del perfil en una aplicación, puedes importar `ViewProfile` desde el módulo `profile` como se muestra a continuación:

```tsx
import { ViewProfile } from './profile';

function App() {
  return (
    <div>
      <ViewProfile />
    </div>
  );
}
```

### Ejemplo con Lazy Loading

Para mejorar el rendimiento, especialmente en aplicaciones grandes, puedes implementar lazy loading para la vista del perfil usando `React.lazy` y `Suspense` de React:

```tsx
import React, { Suspense } from 'react';
const ViewProfile = React.lazy(() => import('./profile/components/view-profile/ViewProfile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewProfile />
    </Suspense>
  );
}
```

