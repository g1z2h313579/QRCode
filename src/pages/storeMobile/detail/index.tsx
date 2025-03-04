import frame from '@/assets/img/Frame.svg';
import img2 from '@/assets/img/image.svg';
import img1 from '@/assets/img/image1.png';
import sort from '@/assets/img/sort.svg';
import { Carousel } from 'antd';
import { FunctionComponent } from 'react';
import Logo from '../component/logo';
import './index.less';
interface DetailIndexProps {
  [props: string]: any;
}

const DetailIndex: FunctionComponent<DetailIndexProps> = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className="detail">
      <div className="header">
        <img src={sort} />
        <Logo />
        <img src={frame} />
      </div>
      <div style={{ background: '#000' }}>
        <Carousel afterChange={onChange}>
          <img src={img1} />
          <img src={img2} />
          <img src={img1} />
          <img src={img2} />
          <img src={img1} />
        </Carousel>
      </div>
    </div>
  );
};

export default DetailIndex;
