import { client } from '@/lib/aspida';

const getUsers = async () => {
  const res = await client.users.get();
  return res.body;
};

export default getUsers;
