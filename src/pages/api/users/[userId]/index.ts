// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { requestPathParamsSchema } from '@/models/User';
import { ErrorResponse } from '@/models/ErrorResponse';
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
          const errorResponse: ErrorResponse = {
            message: '指定のIDを持つユーザは存在しません',
          };
          console.error(errorResponse);
          res.status(404).json(errorResponse);
        }
      } catch (e) {
        if (e instanceof ZodError) {
          const errorResponse: ErrorResponse = {
            message: '不正なパスパラメータです。',
          };
          console.error(errorResponse, e);
          res.status(400).json(errorResponse);
        }
      }
      break;
    default:
      const errorResponse: ErrorResponse = {
        message: 'このエンドポイントで、そのメソッドは定義されていません。',
      };
      console.error(errorResponse);
      res.status(405).json(errorResponse);
  }
}
