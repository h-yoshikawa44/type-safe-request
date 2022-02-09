import { HTTPError } from '@aspida/fetch';
import { GetListRequestQuery, usersSchema } from '@/models/User';
import { errorResponseSchema } from '@/models/ErrorResponse';
import { client } from '@/lib/aspida';

const getUsers = async (query?: GetListRequestQuery) => {
  try {
    const res = await client.users.get({ query });
    return usersSchema.parse(res.body);
  } catch (e) {
    if (e instanceof HTTPError) {
      errorResponseSchema.parse(await e.response.json());
    }
    throw e;
  }
};

export default getUsers;
