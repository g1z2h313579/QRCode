import { useMemo } from 'react';
import {
  ENV_FRANCHISEE,
  ENV_MOBILE,
  ENV_SYSTEMOPERATION,
  useBaseUrl,
} from '../src/constants';

const getRoutes = (baseUrl: string) => {
  return {
    [ENV_SYSTEMOPERATION]: [
      {
        path: '/',
        redirect: `${baseUrl}/dashboard`,
      },
      {
        name: 'ダッシュボード',
        path: `${baseUrl}/dashboard`,
        component: './systemOperationPC/dashboard',
      },
      {
        name: 'login',
        path: `${baseUrl}/login`,
        hideLayout: true,
        component: './systemOperationPC/login',
      },
      {
        name: 'forgetPwdMail',
        path: `${baseUrl}/forgetPwdMail`,
        hideLayout: true,
        component: './systemOperationPC/login/forgetPwdMail',
      },
      {
        name: 'forgetPwdMailAccess',
        path: `${baseUrl}/forgetPwdMailAccess`,
        hideLayout: true,
        component: './systemOperationPC/login/forgetPwdMailAccess',
      },
      {
        name: 'forgetPwdMailReset',
        path: `${baseUrl}/forgetPwdMailReset`,
        hideLayout: true,
        component: './systemOperationPC/login/forgetPwdMailReset',
      },
      {
        name: '加盟店管理',
        path: `${baseUrl}/merchant`,
        routes: [
          {
            name: '加盟店一覧',
            path: `${baseUrl}/merchant/merchantList`,
            component: './systemOperationPC/merchant/merchantList',
          },
          {
            name: '加盟店登録',
            path: `${baseUrl}/merchant/merchantRegister`,
            component: './systemOperationPC/merchant/merchantDetail',
          },
          {
            name: '加盟店詳細',
            path: `${baseUrl}/merchant/:merchantId`,
            component: './systemOperationPC/merchant/merchantDetail',
          },
        ],
      },
      {
        name: '設定',
        path: `${baseUrl}/setting`,
        routes: [
          {
            name: '管理者設定',
            path: `${baseUrl}/setting/admin`,
            component: './systemOperationPC/setting/adminList',
          },
          {
            name: '管理者登録',
            path: `${baseUrl}/setting/adminRegister`,
            component: './systemOperationPC/setting/adminDetail',
          },
          {
            name: '管理者詳細',
            path: `${baseUrl}/setting/:adminId`,
            component: './systemOperationPC/setting/adminDetail',
          },
        ],
      },
      // {
      //   name: '決済一覧',
      //   path: `${baseUrl}/payment/paymentList`,
      //   component: './systemOperationPC/payment/paymentList',
      // },
      // {
      //   name: '決済登録',
      //   path: `${baseUrl}/payment/paymentRegister`,
      //   component: './systemOperationPC/payment/paymentRegister',
      // },
      // {
      //   name: '決済履歴管理',
      //   path: `${baseUrl}/deposit`,
      //   component: './systemOperationPC/deposit/deposit',
      // },
      // {
      //   name: 'お知らせ一覧',
      //   path: `${baseUrl}/notice/noticeList`,
      //   component: './systemOperationPC/notice/noticeList',
      // },
      // {
      //   name: 'お知らせ登録',
      //   path: `${baseUrl}/notice/noticeRegister`,
      //   component: './systemOperationPC/notice/noticeRegister',
      // },
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
    [ENV_FRANCHISEE]: [
      {
        path: '/',
        redirect: `${baseUrl}/dashboard`,
      },
      {
        name: 'ダッシュボード',
        path: `${baseUrl}/dashboard`,
        component: './merchant/dashboard',
      },
      {
        name: 'login',
        path: `${baseUrl}/login`,
        hideLayout: true,
        component: './merchant/login',
      },
      {
        name: 'forgetPwdMail',
        path: `${baseUrl}/forgetPwdMail`,
        hideLayout: true,
        component: './merchant/login/forgetPwdMail',
      },
      {
        name: 'forgetPwdMailAccess',
        path: `${baseUrl}/forgetPwdMailAccess`,
        hideLayout: true,
        component: './merchant/login/forgetPwdMailAccess',
      },
      {
        name: 'forgetPwdMailReset',
        path: `${baseUrl}/forgetPwdMailReset`,
        hideLayout: true,
        component: './merchant/login/forgetPwdMailReset',
      },
      {
        name: '商品管理',
        path: `${baseUrl}/product`,
        routes: [
          {
            name: '商品一覧',
            path: `${baseUrl}/product/productList`,
            component: './merchant/product',
          },
          {
            name: '商品登録',
            path: `${baseUrl}/product/productRegister`,
            component: './merchant/product/merchantDetail',
          },
          {
            name: '商品詳細',
            path: `${baseUrl}/product/:productId`,
            component: './merchant/product/merchantDetail',
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
