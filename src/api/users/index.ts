import {
  GetListRequestQuery,
  PostRequestBody,
  User,
  Users,
} from '@/models/User';

export type Methods = {
  get: {
    query?: GetListRequestQuery;

    resBody: Users;
  };

  post: {
    reqBody: PostRequestBody;

    resBody: User;
    /**
     * reqHeaders(?): ...
     * reqFormat: ...
     * status: ...
     * resHeaders(?): ...
     * polymorph: [...]
     */
  };
};
