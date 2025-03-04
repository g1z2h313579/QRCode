import frame from '@/assets/img/Frame.svg';
import img1 from '@/assets/img/image1.png';
import sort from '@/assets/img/sort.svg';
import { useBaseUrl } from '@/constants';
import { history } from '@umijs/max';
import { Input } from 'antd';
import { PullToRefresh } from 'antd-mobile';
import { sleep } from 'antd-mobile/es/utils/sleep';
import { FunctionComponent, useState } from 'react';
import Logo from '../component/logo';
import CollectionItem from './collectionItem';
import './index.less';

interface CollectionProps {
  [props: string]: any;
}

const { Search } = Input;
const Collection: FunctionComponent<CollectionProps> = () => {
  const [selectedKey, setSelectedKey] = useState<string[]>([]);
  const [setCartStatus, setSetCartStatus] = useState<boolean>(false);
  const baseUrl = useBaseUrl();
  const onSearch = (
    value: string,
    event?: any,
    info?: {
      source?: 'clear' | 'input';
    },
  ) => {
    console.log(value);
    console.log(event);
    console.log(info);
  };
  const detailSearch = [
    {
      name: 'a',
      title: '対象シーズン',
    },
    {
      name: 'b',
      title: 'カラー',
    },
    {
      name: 'c',
      title: '¥30,000以上',
    },
    {
      name: 'a',
      title: '対象シーズン',
    },
    {
      name: 'b',
      title: 'カラー',
    },
    {
      name: 'c',
      title: '¥30,000以上',
    },
  ];
  const collectionList = [
    {
      img: img1,
      title: '100001 パソコン',
      price: 100000,
      key: '1',
      details:
        'パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細',
    },
    {
      img: img1,
      title: '100001 パソコン',
      price: 100000,
      key: '2',
      details:
        'パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細パソコンの詳細',
    },
    {
      img: img1,
      title: '100001 パソコン',
      price: 100000,
      key: '3',
      details: 'パソコンの詳細',
    },
    {
      img: img1,
      title: '100001 パソコン',
      price: 100000,
      key: '4',
      details: 'パソコンの詳細',
    },
    {
      img: img1,
      title: '100001 パソコン',
      price: 100000,
      key: '5',
      details: 'パソコンの詳細',
    },
    {
      img: img1,
      title: '100001 パソコン',
      price: 100000,
      key: '6',
      details: 'パソコンの詳細',
    },
  ];
  const onSetCart = () => {
    if (setCartStatus) {
      history.push(`${baseUrl}/cart`);
    }
    setSetCartStatus(!setCartStatus);
  };

  return (
    <div className="collectionListContainer">
      <div className="header">
        <img src={sort} />
        <Logo />
        <img src={frame} />
      </div>
      <div className="search">
        <Search onSearch={onSearch} />
        <div className="detailSearch">
          {detailSearch.map((item, index) => {
            return (
              <div key={index} className="detailSearchItem">
                <span>{item.title}</span>
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
        <div className="collectionList">
          {collectionList.map((item, index) => {
            return (
              <CollectionItem
                key={index}
                img={item.img}
                title={item.title}
                price={item.price}
                details={item.details}
                selectedKey={selectedKey}
                setSelectionKey={setSelectedKey}
                productKey={item.key}
                setCartStatus={setCartStatus}
              />
            );
          })}
          <div style={{ height: '40px' }}></div>
        </div>
        <div className="setCart" onClick={onSetCart}>
          カードに追加
        </div>
      </PullToRefresh>
    </div>
  );
};

export default Collection;
