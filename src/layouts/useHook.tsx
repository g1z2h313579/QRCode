import { ENV_FRANCHISEE, ENV_SYSTEMOPERATION, useEnvCode } from '@/constants';
import { useMemo } from 'react';
import dashboardAct from '../assets/img/dashboard-active.svg';
import dashboard from '../assets/img/dashboard.png';
import notice from '../assets/img/notice.png';
import paymentAct from '../assets/img/payment-active.svg';
import payment from '../assets/img/payment.png';
import productAct from '../assets/img/product-active.svg';
import product from '../assets/img/product.svg';
import qa from '../assets/img/qa.png';
import settingAct from '../assets/img/setting-active.svg';
import setting from '../assets/img/setting.png';
import ticket from '../assets/img/ticket.svg';

export const useMenu = (pathname: string[]) => {
  const imgStyle = { verticalAlign: 'middle', marginBottom: '4px' };
  const envCode = useEnvCode();
  const menu: any[] = useMemo(() => {
    if (envCode === ENV_SYSTEMOPERATION) {
      return [
        {
          label: 'ダッシュボード',
          key: 'dashboard',
          icon: (
            <img
              src={pathname.includes('dashboard') ? dashboardAct : dashboard}
              style={imgStyle}
            />
          ),
        },
        {
          label: '加盟店管理',
          key: 'merchant',
          icon: (
            <img
              src={pathname.includes('merchant') ? productAct : product}
              style={imgStyle}
            />
          ),
          children: [
            {
              label: '加盟店一覧',
              key: 'merchantList',
            },
            {
              label: '加盟店登録',
              key: 'merchantRegister',
            },
          ],
        },
        {
          label: '決済履歴管理',
          key: 'settlement',
          icon: (
            <img
              src={pathname.includes('settlement') ? paymentAct : payment}
              style={imgStyle}
            />
          ),
          children: [
            {
              label: '決済履歴一覧',
              key: 'settlementList',
            },
          ],
        },
        {
          label: 'お知らせ管理',
          icon: <img src={notice} style={imgStyle} />,
          key: 'notice',
          children: [
            {
              label: 'お知らせ一覧',
              key: 'noticeList',
            },
            {
              label: 'お知らせ登録',
              key: 'noticeRegister',
            },
          ],
        },
        {
          label: '問合わせ管理',
          icon: <img src={qa} style={imgStyle} />,
          key: 'contact',
          children: [
            {
              label: '問合わせ一覧',
              key: 'contactList',
            },
          ],
        },
        {
          label: '帳票管理',
          icon: <img src={ticket} style={imgStyle} />,
          key: 'report',
          children: [
            {
              label: '振込用リスト',
              key: 'transferList',
            },
            {
              label: '代理店別振込用リスト',
              key: 'transferListByAgency',
            },
          ],
        },
        {
          label: '設定',
          icon: (
            <img
              src={pathname.includes('setting') ? settingAct : setting}
              style={imgStyle}
            />
          ),
          key: 'setting',
          children: [
            // {
            //   label: 'プロフィール',
            //   key: 'profile',
            // },
            {
              label: '管理者管理',
              key: 'admin',
            },
            {
              label: '代理店管理',
              key: 'agency',
            },
            {
              label: '業種コード管理',
              key: 'industry',
            },
            {
              label: '決済手数料グループ管理',
              key: 'paymentFee',
            },
          ],
        },
      ];
    } else if (envCode === ENV_FRANCHISEE) {
      return [
        {
          label: 'ダッシュボード',
          key: 'dashboard',
          icon: (
            <img
              src={pathname.includes('dashboard') ? dashboardAct : dashboard}
              style={imgStyle}
            />
          ),
        },
        {
          label: '決済履歴管理',
          key: 'settlement',
          icon: (
            <img
              src={pathname.includes('settlement') ? paymentAct : payment}
              style={imgStyle}
            />
          ),
          children: [
            {
              label: '決済履歴一覧',
              key: 'settlementList',
            },
          ],
        },
        {
          label: '入金管理',
          icon: <img src={ticket} style={imgStyle} />,
          key: 'deposit',
        },
        {
          label: '商品管理',
          icon: (
            <img
              src={pathname.includes('product') ? productAct : product}
              style={imgStyle}
            />
          ),
          key: 'product',
          children: [
            {
              label: '商品一覧',
              key: 'productList',
            },
            {
              label: '商品登録',
              key: 'productRegister',
            },
          ],
        },
        {
          label: '問合わせ管理',
          icon: <img src={qa} style={imgStyle} />,
          key: 'contact',
          children: [
            {
              label: '問合わせ一覧',
              key: 'contactList',
            },
            {
              label: '問合わせ登録',
              key: 'contactRegister',
            },
          ],
        },
        {
          label: '設定',
          icon: (
            <img
              src={pathname.includes('setting') ? settingAct : setting}
              style={imgStyle}
            />
          ),
          key: 'setting',
          children: [
            {
              label: '加盟店',
              key: 'merchant',
            },
            {
              label: '通知設定',
              key: 'notice',
            },
          ],
        },
      ];
    } else {
      return [];
    }
  }, [pathname]);
  return menu;
};
