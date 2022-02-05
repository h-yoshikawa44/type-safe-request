import { userSchema } from '@/models/User';
import { client } from '@/lib/aspida';

const getUser = async (userId: number) => {
  const res = await client.users._userId(userId).get();
  return userSchema.parse(res.body);
};

export default getUser;
