import type { NextApiRequest, NextApiResponse } from 'next';

export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.send({ posts: 'posts' });
}
