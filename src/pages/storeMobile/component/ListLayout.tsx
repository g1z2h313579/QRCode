import bell from '@/assets/img/bell.svg';
import person from '@/assets/img/bi_person.svg';
import homeA from '@/assets/img/home-a.svg';
import home from '@/assets/img/home.svg';
import markerA from '@/assets/img/marker-a.svg';
import marker from '@/assets/img/marker.svg';
import { useBaseUrl } from '@/constants';
import { history } from '@umijs/max';
import { TabBar } from 'antd-mobile';
import { FunctionComponent, useMemo, useState } from 'react';
import style from './index.less';
interface ListLayoutProps {
  initKey?: string;
  children?: React.ReactNode;
}

const ListLayout: FunctionComponent<ListLayoutProps> = (props) => {
  const { initKey = 'home' } = props;
  const baseUrl = useBaseUrl();
  const [activeKey, setActiveKey] = useState(initKey);

  console.log(activeKey);
  const tabs = useMemo(
    () => [
      {
        key: 'home',
        icon: activeKey === 'home' ? <img src={homeA} /> : <img src={home} />,
        onclick: () => {
          setActiveKey('home');
          history.push(`${baseUrl}/home`);
        },
      },
      {
        key: 'collection',
        icon:
          activeKey === 'collection' ? (
            <img src={markerA} />
          ) : (
            <img src={marker} />
          ),
        onclick: () => {
          setActiveKey('collection');
          history.push(`${baseUrl}/collection`);
        },
      },
      {
        key: 'message',
        icon: (active: boolean) =>
          active ? <img src={bell} /> : <img src={bell} />,
      },
      {
        key: 'user',
        icon: (active: boolean) =>
          active ? <img src={person} /> : <img src={person} />,
      },
    ],
    [activeKey],
  );
  return (
    <div className={style.listLayout}>
      <div className={style.content}>{props.children}</div>
      <div className={style.tabBar}>
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              onClick={item.onclick}
            />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default ListLayout;
