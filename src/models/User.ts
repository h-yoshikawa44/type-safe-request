import { z } from 'zod';
import { ToZod } from '@/lib/zod';

export type GetListRequestQuery = {
  limit?: number;
};

export const getListRequestQuerySchema = z
  .object<ToZod<GetListRequestQuery>>({
    limit: z.number().optional(),
  })
  .strict();

export type PostRequestBody = {
  name: string;
};

export const postRequestBodySchema = z
  .object<ToZod<PostRequestBody>>({
    name: z.string(),
  })
  .strict();

export type User = {
  id: number;
  name: string;
};

export const userSchema = z
  .object<ToZod<User>>({
    id: z.number(),
    name: z.string(),
  })
  .strict();

export type Users = User[];

export const usersSchema = z.array(userSchema);
