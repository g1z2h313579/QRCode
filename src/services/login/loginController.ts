import { request } from '@umijs/max';

export const login = async (data: any) => {
  return await request('/api/v1/login', {
    method: 'POST',
    data,
  });
};
