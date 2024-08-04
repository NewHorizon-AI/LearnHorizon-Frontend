import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000
  // Puedes agregar más configuraciones aquí según sea necesario
})

export default apiClient
