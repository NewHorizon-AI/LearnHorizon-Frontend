/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export const POST = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      return
    }

    console.log('Request body:', req.body)

    const response = await axios.post(
      'http://localhost:3001/publications',
      req.body
    )

    console.log('Response from backend:', response.data)

    res.status(200).json(response.data)
  } catch (error: any) {
    console.error(
      'Error:',
      error.response ? error.response.data : error.message
    )

    res.status(500).json({
      message: 'Internal Server Error',
      error: error.response ? error.response.data : error.message
    })
  }
}

export default POST
