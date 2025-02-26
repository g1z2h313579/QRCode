import { useMemo } from 'react';
import dashboard from '../assets/img/dashboard.png';
import income from '../assets/img/income.png';
import notice from '../assets/img/notice.png';
import paymentAct from '../assets/img/payment-active.png';
import payment from '../assets/img/payment.png';
import qa from '../assets/img/qa.png';
import setting from '../assets/img/setting.png';
import ticket from '../assets/img/ticket.svg';

export const useMenu = (pathname: string) => {
  const imgStyle = { verticalAlign: 'middle', marginBottom: '4px' };
  const menu: any[] = useMemo(() => {
    return [
      {
        label: 'ダッシュボード',
        key: 'dashboard',
        // dashed: false,
        icon: <img src={dashboard} style={imgStyle} />,
      },
      {
        label: '決済管理',
        key: 'payment',
        icon: (
          <img
            src={pathname === 'paymentList' ? paymentAct : payment}
            style={imgStyle}
          />
        ),
        // dashed: false,
        children: [
          {
            label: '決済一覧',
            key: 'paymentList',
          },
          {
            label: '決済登録',
            key: 'paymentRegister',
          },
        ],
      },
      {
        label: '決済履歴管理',
        icon: <img src={income} style={imgStyle} />,
        key: 'deposit',
        // children: [],
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
        icon: <img src={setting} style={imgStyle} />,
        key: 'setting',
        children: [
          {
            label: 'プロフィール',
            key: 'profile',
          },
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
  }, [pathname]);
  return menu;
};
