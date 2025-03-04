import frame from '@/assets/img/Frame.svg';
import homeMenu1 from '@/assets/img/homeMenu1.svg';
// import image1 from '@/assets/img/image.svg';
import image1 from '@/assets/img/image1.png';
import search from '@/assets/img/search.svg';
import { Col, Row } from 'antd';
import { PullToRefresh } from 'antd-mobile';
import { sleep } from 'antd-mobile/es/utils/sleep';
import { FunctionComponent, useMemo, useState } from 'react';
import Logo from '../component/logo';
import './index.less';
import ShopItem from './shopItem';

interface HomeProps {
  [props: string]: any;
}
type shopItem = {
  img: any;
  title: string;
  price: number;
  id?: string;
};

const Home: FunctionComponent<HomeProps> = () => {
  const [currentHomeMenu, setCurrentHomeMenu] = useState('monitor');
  const col = 2;
  const homeMenuList = [
    {
      icon: homeMenu1,
      title: 'モニター',
      key: 'monitor',
    },
    {
      icon: homeMenu1,
      title: 'モニター',
      key: 'monitor1',
    },
    {
      icon: homeMenu1,
      title: 'モニター',
      key: 'monitor2',
    },
    {
      icon: homeMenu1,
      title: 'モニター',
      key: 'monitor3',
    },
    {
      icon: homeMenu1,
      title: 'モニター',
      key: 'monitor4',
    },
    {
      icon: homeMenu1,
      title: 'モニター',
      key: 'monitor5',
    },
  ];
  const shopList: shopItem[] = [
    {
      img: image1,
      title: '110000 パソコン',
      price: 200000,
      id: '1',
    },
    {
      img: image1,
      title: '110000 パソコン',
      price: 200000,
      id: '2',
    },
    {
      img: image1,
      title: '110000 パソコン',
      price: 200000,
      id: '3',
    },
    {
      img: image1,
      title: '110000 パソコン',
      price: 200000,
      id: '4',
    },
    {
      img: image1,
      title: '110000 パソコン',
      price: 200000,
      id: '5',
    },
    {
      img: image1,
      title: '110000 パソコン',
      price: 200000,
      id: '6',
    },
    {
      img: image1,
      title: '110000 パソコン',
      price: 200000,
      id: '7',
    },
    {
      img: image1,
      title: '110000 パソコン',
      price: 200000,
      id: '8',
    },
    {
      img: image1,
      title: '110000 パソコン',
      price: 200000,
      id: '9',
    },
    {
      img: image1,
      title: '110000 パソコン',
      price: 200000,
      id: '10',
    },
  ];

  const rowShopList = useMemo(() => {
    let temp: shopItem[] = [];
    return shopList.reduce<shopItem[][]>((pre, cur, index) => {
      temp.push(cur);
      if (temp.length === col || index === shopList.length - 1) {
        pre.push(temp);
        temp = [];
      }
      return pre;
    }, []);
  }, [shopList]);
  return (
    <div className="homeList">
      <div className="header">
        <img src={search} />
        <Logo />
        <img src={frame} />
      </div>
      <div className="homeMenuList">
        <div className="homeMenuListContent">
          {homeMenuList.map((item, index) => {
            return (
              <div
                key={index}
                className={`homeMenu ${
                  currentHomeMenu === item.key ? 'active' : ''
                }`}
                onClick={() => {
                  setCurrentHomeMenu(item.key);
                }}
              >
                <div className="homeMenuImg">
                  <img src={item.icon} />
                </div>
                <div className="homeMenuTitle">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000);
          console.log('1');
        }}
        pullingText="引っ張って更新"
        canReleaseText="更新する"
        refreshingText="更新中"
        completeText="更新完了"
      >
        <div className="homeContent">
          {rowShopList.map((item, index) => {
            return (
              <Row key={index}>
                {item.map((shopItem, index) => {
                  return (
                    <Col key={index} span={24 / col}>
                      <ShopItem {...shopItem} />
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </div>
      </PullToRefresh>
    </div>
  );
};

export default Home;
