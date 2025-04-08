// import Icon from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import ja_JP from 'antd/locale/ja_JP';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
// for date-picker i18n
import { ENV_MOBILE, useEnvCode } from '@/constants';
import { history, Outlet } from '@umijs/max';
import { useRoutesMap } from '../../config/route';
import style from './layout.less';
import { useMenu } from './useHook';

interface HeaderProps {
  [props: string]: any;
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  const [current, setCurrent] = useState<string>('');
  const [keyPath, setKeyPath] = useState<string[]>(['', '']);
  const [hidelayout, setHideLayout] = useState(false);
  const routes = useRoutesMap();
  const envCode = useEnvCode();
  useEffect(() => {
    const path = history.location.pathname.split('/');
    const currentPath = path[path.length - 1];
    // 判断是否是纯数字
    const isNumber = /^\d+$/.test(currentPath);
    if (isNumber) {
      setCurrent(path[path.length - 2]);
      setKeyPath([...path.slice(1).reverse()]);
    } else {
      setCurrent(currentPath);
      setKeyPath([...path.slice(2).reverse()]);
    }
  }, []);
  const menu = useMenu(keyPath);

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

  useEffect(() => {
    const currentRoute = routes[envCode].reduce<any>((pre, item) => {
      if (item.path === history.location.pathname) {
        return item;
      } else if (item.routes && item.routes.length > 0) {
        const found = item.routes.find(
          (i) => i.path === history.location.pathname,
        );
        return found || pre;
      } else {
        return pre;
      }
    }, {});
    if (currentRoute.hideLayout) {
      setHideLayout(true);
    }
  }, [current]);

  if (envCode === ENV_MOBILE || hidelayout) {
    return (
      <ConfigProvider locale={ja_JP}>
        <Outlet {...props} />
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

      <ConfigProvider locale={ja_JP}>
        <Outlet {...props} />
      </ConfigProvider>
    </div>
  );
};

export default Header;
