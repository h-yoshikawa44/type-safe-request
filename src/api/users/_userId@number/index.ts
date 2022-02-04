import { RequestBody, User } from '@/models/User';

export type Methods = {
  get: {
    resBody: User;
  };

  put: {
    reqBody: RequestBody;

    resBody: User;
  };
};
