import { PostRequestBody, User } from '@/models/User';

export type Methods = {
  get: {
    resBody: User;
  };

  put: {
    reqBody: PostRequestBody;

    resBody: User;
  };
};
