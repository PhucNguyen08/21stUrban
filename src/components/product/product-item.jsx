import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './product-item.module.scss';
import { formatter } from '@/utils/formatter';

const cx = classNames.bind(styles);

export default function ProductItem(props) {
  const { data } = props;

  return (
    <Link href={`/products/${data.id}`}>
      <div className={cx('item')}>
        <div className={cx('card')}>
          <img
            src={data.images[0]}
            alt={data.name}
            className={cx('img', 'img-hover')}
            loading="lazy"
          />
          <img
            src={data.images[1]}
            alt={data.name}
            loading="lazy"
            className={cx('img')}
          />
        </div>
        <div className={cx('about')}>
          <span className={cx('name')}>{data.name}</span>
          <div className={cx('bottom')}>
            <span className={cx('price')}>{formatter.format(data.price)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
