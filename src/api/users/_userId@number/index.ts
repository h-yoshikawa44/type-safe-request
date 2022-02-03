import { User } from '@/models/User';

export type Methods = {
  get: {
    resBody: User;
  };

  put: {
    reqBody: {
      name: string;
    };

    resBody: User;
  };
};
