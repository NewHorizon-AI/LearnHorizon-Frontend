import axios from 'axios'
import { type NextApiRequest, type NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://localhost:3001/category')
      res.status(200).json(response.data)
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los datos' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
