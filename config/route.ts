import { useMemo } from 'react';
import { ENV_MOBILE, ENV_SYSTEMOPERATION, useBaseUrl } from '../src/constants';

const getRoutes = (baseUrl: string) => {
  return {
    [ENV_SYSTEMOPERATION]: [
      {
        path: '/',
        redirect: `${baseUrl}/payment/paymentList`,
      },
      {
        path: `${baseUrl}`,
        routes: [
          {
            name: '決済一覧',
            path: `${baseUrl}/payment/paymentList`,
            component: './systemOperationPC/payment/paymentList',
          },
          {
            name: '決済登録',
            path: `${baseUrl}/payment/paymentRegister`,
            component: './systemOperationPC/payment/paymentRegister',
          },
          {
            name: '決済履歴管理',
            path: `${baseUrl}/deposit`,
            component: './systemOperationPC/deposit/deposit',
          },
          {
            name: 'お知らせ一覧',
            path: `${baseUrl}/notice/noticeList`,
            component: './systemOperationPC/notice/noticeList',
          },
          {
            name: 'お知らせ登録',
            path: `${baseUrl}/notice/noticeRegister`,
            component: './systemOperationPC/notice/noticeRegister',
          },
        ],
      },
    ],
    [ENV_MOBILE]: [
      {
        path: '/',
        redirect: `${baseUrl}/login`,
      },
      {
        path: '/storeMobile',
        // layout: false,
        routes: [
          {
            name: 'login',
            path: `${baseUrl}/login`,
            component: './storeMobile/login',
          },
          {
            name: 'forgetPwdMail',
            path: `${baseUrl}/forgetPwdMail`,
            component: './storeMobile/login/forgetPwdMail',
          },
          {
            name: 'forgetPwdMailAccess',
            path: `${baseUrl}/forgetPwdMailAccess`,
            component: './storeMobile/login/forgetPwdMailAccess',
          },
          {
            name: 'forgetPwdMailReset',
            path: `${baseUrl}/forgetPwdMailReset`,
            component: './storeMobile/login/forgetPwdMailReset',
          },
          {
            name: 'home',
            path: `${baseUrl}/home`,
            component: './storeMobile/list',
          },
          {
            name: 'collection',
            path: `${baseUrl}/collection`,
            component: './storeMobile/list',
          },
          {
            name: 'cart',
            path: `${baseUrl}/cart`,
            component: './storeMobile/cart',
          },
          {
            name: 'detail',
            path: `${baseUrl}/detail/:productId`,
            component: './storeMobile/detail',
          },
        ],
      },
    ],
  };
};

export const configGetRoutes = (baseUrl?: string) => {
  return getRoutes(`/${baseUrl!}`);
};
export const useRoutesMap = () => {
  const baseUrl = useBaseUrl();
  const r = useMemo(() => {
    return getRoutes(baseUrl);
  }, [baseUrl]);
  return r;
};
