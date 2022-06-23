import type { NextApiRequest, NextApiResponse } from 'next'
import customAxios from '../../../utilities/customAxios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(404)
  }
  
  try {
    const result = await customAxios.post(process.env.BACKEND_URL + "/user/logout")

    res.status(200).json(result.data)
  } catch (err: any) {
    res.status(err.response.status).json(err.response.data)
  }
}
