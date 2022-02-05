// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { requestPathParamsSchema } from '@/models/User';
import { users } from '@/mock/user';
import { ZodError } from 'zod';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const query = requestPathParamsSchema.parse(req.query);
        const user = users.find((user) => user.id === Number(query.userId));
        if (user) {
          res.status(200).json(user);
        } else {
          const errorMessage = '指定のIDを持つユーザは存在しません';
          console.error(errorMessage);
          res.status(404).send(errorMessage);
        }
      } catch (e) {
        if (e instanceof ZodError) {
          const errorMessage = '不正なパスパラメータです。';
          console.error(errorMessage, e);
          res.status(400).send(errorMessage);
        }
      }
      break;
  }
}
