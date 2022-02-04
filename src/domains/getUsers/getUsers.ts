import { RequestQuery } from '@/models/User';
import { client } from '@/lib/aspida';

const getUsers = async (query?: RequestQuery) => {
  const res = await client.users.get({ query });
  return res.body;
};

export default getUsers;
