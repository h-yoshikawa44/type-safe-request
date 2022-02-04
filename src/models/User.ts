export type RequestQuery = {
  limit?: number;
};

export type RequestBody = {
  name: string;
};

export type User = {
  id: number;
  name: string;
};

export type Users = User[];
