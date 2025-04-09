// import Icon from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, ConfigProvider, Menu } from 'antd';
import ja_JP from 'antd/locale/ja_JP';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
// for date-picker i18n
import { ENV_MOBILE, useEnvCode } from '@/constants';
import { history, Outlet, useLocation } from '@umijs/max';
import { useRoutesMap } from '../../config/route';
import style from './layout.less';
import { useMenu } from './useHook';

interface HeaderProps {
  [props: string]: any;
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  const [current, setCurrent] = useState<string>('');
  const [keyPath, setKeyPath] = useState<string[]>(['', '']);
  const location = useLocation();
  const [hidelayout, setHideLayout] = useState(false);
  const routes = useRoutesMap();
  const envCode = useEnvCode();
  const menu = useMenu(keyPath);
  const menuItems = useMemo(() => {
    // 根据children字段，递归查询是有都hide字段，有hide字段，则把当前菜单从菜单列表删除
    const getMenu = (menu: any[]) => {
      return menu.reduce((pre, item) => {
        if (item.hide) {
          return pre;
        }
        if (item.children) {
          item.children = getMenu(item.children);
          if (item.children.length === 0) {
            delete item.children;
          }
        }
        pre.push(item);
        return pre;
      }, [] as any[]);
    };
    getMenu(menu);
    return menu;
  }, [menu]);
  useEffect(() => {
    const path = location.pathname.split('/');
    const currentPath = path[path.length - 1];
    // 判断是否是纯数字
    const isNumber = /^\d+$/.test(currentPath);
    if (isNumber) {
      const currentPathkey = [...path.slice(2, 3)];
      // 根据currentpathkey从menu中找到对应的母菜单，如果母菜单有children，则取出第一个子菜单的key
      const parentMenu = menu.find((item) => item.key === currentPathkey[0]);
      if (parentMenu?.children && parentMenu.children.length > 0) {
        currentPathkey.unshift(parentMenu.children[0].key);
      }
      setCurrent(path[path.length - 2]);
      setKeyPath(currentPathkey);
    } else {
      setCurrent(currentPath);
      setKeyPath([...path.slice(2).reverse()]);
    }
  }, [location]);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    setKeyPath(e.keyPath);
    const baseUrl = envCode;
    const path = e.keyPath.toReversed().join('/');
    history.push(`/${baseUrl}/${path}`);
  };
  const brand = useMemo(() => {
    let str = [];
    for (let i = keyPath.length; i > 0; i--) {
      const key = keyPath[i - 1];
      for (let i = 0; i < menu.length; i++) {
        if (menu[i]?.key === key) {
          str.push({
            title: menu[i]?.label,
          });
          break;
        }
        if (menu[i]?.children) {
          let flag = false;
          for (let j = 0; j < menu[i].children!.length; j++) {
            if (menu[i].children![j]?.key === key) {
              str.push({
                title: menu[i].children[j]?.label,
              });
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
    } else {
      setHideLayout(false);
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
              items={menuItems}
            />
          </ConfigProvider>
        </div>
        <div className={style.brand}>
          <Breadcrumb separator=">" items={brand} />
        </div>
      </div>

      <ConfigProvider locale={ja_JP}>
        <Outlet {...props} />
      </ConfigProvider>
    </div>
  );
};

export default Header;
