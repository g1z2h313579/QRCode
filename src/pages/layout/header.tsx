import Icon from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import ja_JP from 'antd/locale/ja_JP';
import { FunctionComponent, useMemo, useState } from 'react';
import dashboard from "../../assets/img/dashboard.png"
import income from "../../assets/img/income.png"
import notice from "../../assets/img/notice.png"
import payment from "../../assets/img/payment.png"
import paymentAct from "../../assets/img/payment-active.png"
import product from "../../assets/img/product.png"
import qa from "../../assets/img/qa.png"
import setting from "../../assets/img/setting.png"
// for date-picker i18n
import style from './layout.less';
interface HeaderProps {
  [props: string]: any;
}
type MenuItem = Required<MenuProps>['items'][number];

const Header: FunctionComponent<HeaderProps> = (props) => {
  const [current, setCurrent] = useState<string>();
  const [keyPath, setKeyPath] = useState<string[]>(['paymentList', 'payment']);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    setKeyPath(e.keyPath);
  };
  const imgStyle = {verticalAlign: "middle", marginBottom: "4px"}
  const items: any = useMemo(() => {
    return [
      {
        label: 'ダッシュボード',
        key: 'dashboard',
        dashed: false,
        icon: <img src={dashboard} style={imgStyle} />,
        children: [
          {
            type: 'group',
            label: 'Item 1',
            children: [
              { label: 'Option 1', key: 'setting:1' },
              { label: 'Option 2', key: 'setting:2' },
            ],
          },
          {
            type: 'group',
            label: 'Item 2',
            children: [
              { label: 'Option 3', key: 'setting:3' },
              { label: 'Option 4', key: 'setting:4' },
            ],
          },
        ],
      },
      {
        label: '決済管理',
        key: 'payment',
        icon: <img src={current === 'paymentList' ? paymentAct : payment} style={imgStyle} />,
        dashed: false,
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
        label: '入金管理',
        icon: <img src={income} style={imgStyle} />,
        key: 'deposit',
        children: [],
      },
      {
        label: '商品管理',
        key: 'product',
        icon: <img src={product} style={imgStyle} />,
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
          {
            label: '問合わせ登録',
            key: 'contactRegister',
          },
        ],
      },
      {
        label: '設定',
        icon: <img src={setting} style={imgStyle} />,
        key: 'setting',
      },
    ]
  }, [current]);
  const brand = useMemo(() => {
    let str = '';
    for (let i = keyPath.length; i > 0; i--) {
      const key = keyPath[i - 1];
      for (let i = 0; i < items.length; i++) {
        if (items[i].key === key) {
          str += items[i].label;
          break;
        }
        if (items[i].children) {
          let flag = false;
          for (let j = 0; j < items[i].children.length; j++) {
            if (items[i].children[j].key === key) {
              str += '>' + items[i].children[j].label;
              flag = true;
              break;
            }
          }
          if (flag) {
            break;
          }
        }
      }
    }
    return str;
  }, [current]);

  return (
    <div className={style.layout}>
      <div className={style.header}>
        <div className={style.headerLogo}>
          <div className={style.logo}>LOGO</div>
          <div className="login">
            <Icon type="user" />
          </div>
        </div>
        <div className={style.menu}>
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  activeBarBorderWidth: 0,
                  activeBarHeight: 0,
                  iconMarginInlineEnd: 2,
                  horizontalItemSelectedBg: "#07359E",
                  subMenuItemSelectedColor: "#fff",
                  // itemSelectedColor: "#fff"
                },
              },
            }}
          >
            <Menu
              onClick={onClick}
              selectedKeys={[current!]}
              mode="horizontal"
              items={items}
            />
          </ConfigProvider>
        </div>
        <div className={style.brand}>{brand}</div>
      </div>
      <ConfigProvider locale={ja_JP}>{props.children}</ConfigProvider>
    </div>
  );
};

export default Header;
