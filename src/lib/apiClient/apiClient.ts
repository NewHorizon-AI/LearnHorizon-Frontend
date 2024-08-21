import axios from 'axios'

/*
  TODO: Reestructurar la configuración de la API
  /lib
    /api
      index.ts         // Exporta todas las funciones de API centralizadas
      apiUtils.ts      // Utilidades comunes para las peticiones, como configuración de headers
      fetchClient.ts   // Configuración del cliente fetch o axios
*/

const apiClient = axios.create({
  baseURL: process.env.LEARN_HORIZON_BACKEND_REMOTE ?? 'http://localhost:3001',
  timeout: 5000
  // Puedes agregar más configuraciones aquí según sea necesario
})

export default apiClient
