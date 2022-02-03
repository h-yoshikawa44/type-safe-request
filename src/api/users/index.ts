import { User, Users } from '@/models/User';

export type Methods = {
  get: {
    query?: {
      limit: number;
    };

    resBody: Users;
  };

  post: {
    reqBody: {
      name: string;
    };

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
