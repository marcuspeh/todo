import type { NextApiRequest, NextApiResponse } from 'next'
import customAxios from '../../../utilities/customAxios';

type Data = {
  id: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'PATCH') {
    return res.status(404)
  }
  
  try {
    const result = await customAxios.patch(process.env.BACKEND_URL + "/todo/delete", req.body)

    res.status(200).json(result.data)
  } catch (err: any) {
    res.status(err.response.status).json(err.response.data)
  }
}
