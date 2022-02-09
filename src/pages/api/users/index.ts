// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import {
  getListRequestQuerySchema,
  postRequestBodySchema,
  User,
} from '@/models/User';
import { ErrorResponse } from '@/models/ErrorResponse';
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
          const errorResponse: ErrorResponse = {
            message: '不正なクエリパラメータです。',
          };
          console.error(errorResponse, e);
          res.status(400).json(errorResponse);
        }
      }
      break;
    case 'POST':
      try {
        const body = postRequestBodySchema.parse(req.body);
        const newUser: User = {
          id: users.length + 1,
          name: body.name,
        };
        res.status(201).json(newUser);
      } catch (e) {
        if (e instanceof ZodError) {
          const errorResponse: ErrorResponse = {
            message: '不正なリクエストパラメータです。',
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
