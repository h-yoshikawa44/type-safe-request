import { RequestQuery, RequestBody, User, Users } from '@/models/User';

export type Methods = {
  get: {
    query?: RequestQuery;

    resBody: Users;
  };

  post: {
    reqBody: RequestBody;

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
