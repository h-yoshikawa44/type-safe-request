import { HTTPError } from '@aspida/fetch';
import { userSchema } from '@/models/User';
import { errorResponseSchema } from '@/models/ErrorResponse';
import { client } from '@/lib/aspida';

const getUser = async (userId: number) => {
  try {
    const res = await client.users._userId(userId).get();
    return userSchema.parse(res.body);
  } catch (e) {
    if (e instanceof HTTPError) {
      errorResponseSchema.parse(await e.response.json());
    }
    throw e;
  }
};

export default getUser;
