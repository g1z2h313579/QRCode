// 运行时配置
import {
  AxiosResponse,
  RequestConfig,
  RequestOptions,
  RunTimeLayoutConfig,
  history,
} from '@umijs/max';
import { message } from 'antd';
import './global.less';

declare global {
  interface Window {
    envCode: string;
  }
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  window.envCode = process.env.UMI_APP || '';
  return { name: '' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    // 常用属性
    logo: false,
    pure: true,
  };
};
export const request: RequestConfig = {
  timeout: 3000,
  // other axios options you want
  errorConfig: {
    errorHandler(err) {
      // @ts-ignore
      if (err?.response?.data?.msg === 'login first') {
        localStorage.setItem('token', '');
        message.error(
          'ログインの有効期限が切れました。再度ログインしてください',
        );
        history.push('/login');
      }
    },
    errorThrower(...err) {
      console.log('err2', err);
    },
  },
  requestInterceptors: [
    (config: RequestOptions) => {
      // console.log(config)
      config.headers!.token = localStorage.getItem('token') ?? '';
      return config;
    },
  ],
  responseInterceptors: [
    (response: AxiosResponse) => {
      if (response.data.msg === 'login first') {
        message.error('请先登陆');
        localStorage.setItem('token', '');
        history.push('/login');
      }
      return response;
    },
  ],
};
