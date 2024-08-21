import axios from 'axios'

/*
  TODO: Reestructurar la configuración de la API
  /lib
    /api
      index.ts         // Exporta todas las funciones de API centralizadas
      apiUtils.ts      // Utilidades comunes para las peticiones, como configuración de headers
      fetchClient.ts   // Configuración del cliente fetch o axios
*/

// Decide qué URL base utilizar basada en NODE_ENV
const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === 'production') {
    // URL para producción
    return process.env.LEARN_HORIZON_BACKEND_REMOTE?.toString() ?? ''
  } else {
    // URL para desarrollo
    return 'http://localhost:3001'
  }
}

const apiClient = axios.create({
  baseURL: getBaseUrl(),
  timeout: 5000
  // Puedes agregar más configuraciones aquí según sea necesario
})

export default apiClient
