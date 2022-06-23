// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie';
import customAxios from '../../utilities/customAxios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await customAxios.post(process.env.BACKEND_URL + "/user/logout")

    res.setHeader('Set-Cookie', [
      serialize('GIN', "", {}),
      serialize('TONIC', "", {}) 
    ])
    res.status(200).json(result.data)

  } catch (err: any) {
    res.status(err.response.status).json(err.response.data)
  }
}
