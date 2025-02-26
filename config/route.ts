export const routesMap = {
  sysOpe: [
    {
      path: '/',
      redirect: '/sysOpe/payment/paymentList',
    },
    {
      path: '/sysOpe',
      routes: [
        {
          name: '決済一覧',
          path: '/sysOpe/payment/paymentList',
          component: './systemOperationPC/payment/paymentList',
        },
        {
          name: '決済登録',
          path: '/sysOpe/payment/paymentRegister',
          component: './systemOperationPC/payment/paymentRegister',
        },
        {
          name: '決済履歴管理',
          path: '/sysOpe/deposit',
          component: './systemOperationPC/deposit/deposit',
        },
        {
          name: 'お知らせ一覧',
          path: '/sysOpe/notice/noticeList',
          component: './systemOperationPC/notice/noticeList',
        },
        {
          name: 'お知らせ登録',
          path: '/sysOpe/notice/noticeRegister',
          component: './systemOperationPC/notice/noticeRegister',
        },
      ],
    },
  ],
  storeMobile: [
    {
      path: '/',
      redirect: '/storeMobile/login',
    },
    {
      path: '/storeMobile',
      // layout: false,
      routes: [
        {
          name: 'login',
          path: '/storeMobile/login',
          component: './storeMobile/login',
        },
        {
          name: 'list',
          path: '/storeMobile/list',
          component: './storeMobile/list',
        },
      ],
    },
  ],
};
export const routes = [
  {
    path: '/',
    redirect: '/sysOpe/paymentList',
  },
  {
    path: '/sysOpe',
    routes: [
      {
        name: '決済一覧',
        path: '/sysOpe/paymentList',
        component: './systemOperationPC/payment',
      },
    ],
  },
  {
    path: '/storeMobile',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/storeMobile/login',
        component: './storeMobile/login',
      },
      {
        name: 'list',
        path: '/storeMobile/list',
        component: './storeMobile/list',
      },
    ],
  },
];
