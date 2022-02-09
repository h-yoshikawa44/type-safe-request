import { HTTPError } from '@aspida/fetch';
import { PostRequestBody, userSchema } from '@/models/User';
import { errorResponseSchema } from '@/models/ErrorResponse';
import { client } from '@/lib/aspida';

const postUser = async (body: PostRequestBody) => {
  try {
    const res = await client.users.post({ body });
    return userSchema.parse(res.body);
  } catch (e) {
    if (e instanceof HTTPError) {
      errorResponseSchema.parse(await e.response.json());
    }
    throw e;
  }
};

export default postUser;
