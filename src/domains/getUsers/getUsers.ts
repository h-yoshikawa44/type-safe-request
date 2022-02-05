import { GetListRequestQuery, usersSchema } from '@/models/User';
import { client } from '@/lib/aspida';

const getUsers = async (query?: GetListRequestQuery) => {
  const res = await client.users.get({ query });
  return usersSchema.parse(res.body);
};

export default getUsers;
