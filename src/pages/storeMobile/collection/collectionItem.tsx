import shoppingBagA from '@/assets/img/shoppingBag-a.svg';
import { useBaseUrl } from '@/constants';
import { history } from '@umijs/max';
import { Checkbox, Ellipsis } from 'antd-mobile';
import { FunctionComponent } from 'react';
import './index.less';
interface CollectionItemProps {
  img: any;
  title: string;
  price: number;
  details: string;
  productKey: string;
  selectedKey?: string[];
  setSelectionKey: React.Dispatch<React.SetStateAction<string[]>>;
  setCartStatus: boolean;
}

const CollectionItem: FunctionComponent<CollectionItemProps> = (props) => {
  const baseUrl = useBaseUrl();
  const {
    img,
    title,
    price,
    details,
    productKey,
    selectedKey = [],
    setSelectionKey,
    setCartStatus,
  } = props;
  const itemOnClick = () => {
    if (setCartStatus) {
      setSelectionKey([...selectedKey, productKey]);
    } else {
      history.push(`${baseUrl}/detail/${productKey}`);
    }
  };
  return (
    <div className="collectionItem" onClick={itemOnClick}>
      {setCartStatus && <Checkbox checked={selectedKey.includes(productKey)} />}
      <div className="img">
        <img src={img} />
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="price">¥{price}（税込）</div>
        <div className="details">
          <Ellipsis direction="end" rows={3} content={details} />
        </div>
      </div>
      <div className="bag">
        <img src={shoppingBagA} />
      </div>
    </div>
  );
};

export default CollectionItem;
