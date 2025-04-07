import { request } from '@umijs/max';

export async function queryProjectList(params?: { keyword?: string }) {
  return request('/merchant/project/list', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
