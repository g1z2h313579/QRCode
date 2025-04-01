import frame from '@/assets/img/Frame.svg';
import img2 from '@/assets/img/image.svg';
import img1 from '@/assets/img/image1.png';
import marker from '@/assets/img/marker.svg';
import sort from '@/assets/img/sort.svg';
import { Checkbox, Swiper } from 'antd-mobile';
import { FunctionComponent } from 'react';
import Logo from '../component/logo';
import './index.less';
interface DetailIndexProps {
  [props: string]: any;
}

const DetailIndex: FunctionComponent<DetailIndexProps> = () => {
  const imgs = [
    {
      src: img1,
    },
    {
      src: img2,
    },
  ];

  return (
    <div className="detail">
      <div className="header">
        <img src={sort} />
        <Logo />
        <img src={frame} />
      </div>
      <div className="content">
        <div className="contentImgSwiper">
          <Swiper>
            {imgs.map((item, index) => {
              return (
                <Swiper.Item key={index}>
                  <img className="detailImg" src={item.src} />
                </Swiper.Item>
              );
            })}
          </Swiper>
        </div>
        <div className="contentText">
          <div className="contentTextTitle">1000001 パソコン</div>
          <div className="contentTextPrice">
            ￥100,000（税込）
            <div>
              <div className="add">+</div>
              <div className="num">1</div>
              <div className="reduce">-</div>
            </div>
          </div>
          <div className="describe">
            テキストテキストテキストテキストテキストテキスト
          </div>
          <div className="type">
            <div>
              <Checkbox>商品オプション商品A</Checkbox>
              <Checkbox>商品オプション商品B</Checkbox>
              <Checkbox>商品オプション商品C</Checkbox>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="mark">
          <img src={marker} />
        </div>
        <div className="footerBtn">カートに入れる</div>
      </div>
    </div>
  );
};

export default DetailIndex;
