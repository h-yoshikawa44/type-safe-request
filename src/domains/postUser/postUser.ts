import { PostRequestBody, userSchema } from '@/models/User';
import { client } from '@/lib/aspida';

const postUser = async (body: PostRequestBody) => {
  const res = await client.users.post({ body });
  console.log(res.body);
  return userSchema.parse(res.body);
};

export default postUser;
