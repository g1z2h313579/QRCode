// import Icon from '@ant-design/icons';
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import ja_JP from 'antd/locale/ja_JP';
import { FunctionComponent, useMemo, useState } from 'react';

// for date-picker i18n
import { ENV_MOBILE, FONTREM } from '@/constants';
import { history, Outlet } from '@umijs/max';
import style from './layout.less';
import { useMenu } from './useHook';
interface HeaderProps {
  [props: string]: any;
}

const Header: FunctionComponent<HeaderProps> = () => {
  const [current, setCurrent] = useState<string>('paymentList');
  const [keyPath, setKeyPath] = useState<string[]>(['paymentList', 'payment']);
  const menu = useMenu(current);
  const envCode = useMemo(() => window.envCode as keyof typeof FONTREM, []);
  const px2rem = px2remTransformer({
    rootValue: FONTREM[envCode], // 32px = 1rem; @default 16
  });
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    setKeyPath(e.keyPath);
    const baseUrl = envCode;
    const path = e.keyPath.toReversed().join('/');
    history.push(`/${baseUrl}/${path}`);
  };
  const brand = useMemo(() => {
    let str = '';
    for (let i = keyPath.length; i > 0; i--) {
      const key = keyPath[i - 1];
      for (let i = 0; i < menu.length; i++) {
        if (menu[i]?.key === key) {
          str += menu[i]?.label;
          break;
        }
        if (menu[i]?.children) {
          let flag = false;
          for (let j = 0; j < menu[i].children!.length; j++) {
            if (menu[i].children![j]?.key === key) {
              str += '>' + menu[i].children[j]?.label;
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

  if (envCode === ENV_MOBILE) {
    return (
      <ConfigProvider locale={ja_JP}>
        <StyleProvider transformers={[px2rem]}>
          <Outlet />
        </StyleProvider>
      </ConfigProvider>
    );
  }

  return (
    <div className={style.layout}>
      <div className={style.header}>
        <div className={style.headerLogo}>
          <div className={style.logo}>LOGO</div>
          {/* <div className="login">
            <Icon type="user" />
          </div> */}
        </div>
        <div className={style.menu}>
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  activeBarBorderWidth: 0,
                  activeBarHeight: 0,
                  iconMarginInlineEnd: 2,
                  horizontalItemSelectedBg: '#07359E',
                  subMenuItemSelectedColor: '#fff',
                  horizontalItemSelectedColor: '#fff',
                  // itemSelectedColor: "#fff"
                },
              },
            }}
          >
            <Menu
              onClick={onClick}
              selectedKeys={[current!]}
              mode="horizontal"
              items={menu}
            />
          </ConfigProvider>
        </div>
        <div className={style.brand}>{brand}</div>
      </div>
      <StyleProvider transformers={[px2rem]}>
        <ConfigProvider locale={ja_JP}>
          <Outlet />
        </ConfigProvider>
      </StyleProvider>
    </div>
  );
};

export default Header;
