// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie';
import customAxios from '../../utilities/customAxios';

type Data = {
  email: string
  password: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const result = await customAxios.post(process.env.BACKEND_URL + "/user/login", req.body)

    res.setHeader('Set-Cookie', [
      serialize('GIN', result.data.GIN, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/"
      }),
      serialize('TONIC', result.data.TONIC, { 
        httpOnly: false,
        secure: true,
        sameSite: "strict",
        path: "/" 
      }) 
    ])
    res.status(200).json(result.data)

  } catch (err: any) {
    res.status(err.response.status).json(err.response.data)
  }
}
