import aspida, { FetchConfig } from '@aspida/fetch';
import api from '@/api/$api';

const fetchConfig: FetchConfig = {
  credentials: 'include',
  baseURL: '/api',
  throwHttpErrors: true, // throw an error on 4xx/5xx, default is false
};

const client = api(aspida(fetch, fetchConfig));

export { client };
