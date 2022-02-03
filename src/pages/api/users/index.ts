// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const users = [
  {
    id: 1,
    name: 'taro',
    age: 20,
  },
  {
    id: 2,
    name: 'jiro',
    age: 18,
  },
  {
    id: 3,
    name: 'saburo',
    age: 16,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(users);
}
