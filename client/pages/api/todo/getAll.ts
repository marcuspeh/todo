import type { NextApiRequest, NextApiResponse } from 'next'
import customAxios from '../../../utilities/customAxios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(404)
  }
  
  try {
    const result = await customAxios.get(process.env.BACKEND_URL + "/todo/getAll")

    res.status(200).json(result.data)
  } catch (err: any) {
    console.log(err)
    res.status(err.response.status).json(err.response.data)
  }
}
