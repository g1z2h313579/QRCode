import shoppingBag from '@/assets/img/shoppingBag.svg';
import { useBaseUrl } from '@/constants';
import { history } from '@umijs/max';
import { FunctionComponent } from 'react';
import './index.less';
interface ShopItemProps {
  img: any;
  title: string;
  price: number;
  id?: string;
}

const ShopItem: FunctionComponent<ShopItemProps> = (props) => {
  const baseUrl = useBaseUrl();
  const goDetail = () => {
    history.push(`${baseUrl}/detail/${props.id}`);
  };
  return (
    <div className="shopItem" onClick={goDetail}>
      <div className="shopItemImg">
        <img src={props.img} className="shopImg" />
        <img src={shoppingBag} className="shopBag" />
      </div>
      <div className="shopItemTitle">{props.title}</div>
      <div className="shopItemPrice">¥{props.price}(税込)</div>
    </div>
  );
};

export default ShopItem;
