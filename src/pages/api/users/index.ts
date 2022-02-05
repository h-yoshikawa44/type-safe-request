// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { getListRequestQuerySchema } from '@/models/User';
import { users } from '@/mock/user';
import { ZodError } from 'zod';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const query = getListRequestQuerySchema.parse(req.query);
        if (query.limit && query.limit < users.length) {
          res.status(200).json(users.slice(0, query.limit));
        } else {
          res.status(200).json(users);
        }
      } catch (e) {
        if (e instanceof ZodError) {
          const errorMessage = '不正なクエリパラメータです。';
          console.error(errorMessage, e);
          res.status(400).send(errorMessage);
        }
      }
      break;
  }
}
