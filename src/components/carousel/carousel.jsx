import { Carousel } from 'antd';
import classNames from 'classnames/bind';
import styles from './carousel.module.scss';

const cx = classNames.bind(styles);

export default function Slide(props) {
  return (
    <div className={cx('wrapper')}>
      <Carousel autoplay>
        {props.dataCarousel.map(carouselItem => (
          <div className={cx('item')} key={carouselItem.id}>
            <img src={carouselItem.image} alt="Image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
