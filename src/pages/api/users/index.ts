// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { RequestQuery } from '@/models/User';
import { users } from '@/mock/user';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const query = req.query as RequestQuery;
      if (query.limit && query.limit < users.length) {
        res.status(200).json(users.slice(0, query.limit));
      }
      res.status(200).json(users);
    case 'POST':
  }
}
