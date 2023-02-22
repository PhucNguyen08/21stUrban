import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './newarrivals.module.scss';
import { Col, Row } from 'antd';
import { formatter } from '@/utils/formatter';

const cx = classNames.bind(styles);

export default function NewArrivals(props) {
  const [visible, setVisible] = useState(8);
  const { dataProducts } = props;

  const HandlerLoadMore = () => {
    setVisible(prev => prev + 4);
  };

  const dataSlices = dataProducts.slice(0, visible);

  return (
    <section className={cx('wrapper')}>
      <h1 className={cx('heading')}>Sản Phẩm Mới</h1>
      <Row gutter={[32, 16]}>
        {dataSlices.map(data => (
          <Col xs={12} sm={12} md={12} lg={6} xl={6} key={data.id}>
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
                    className={cx('img')}
                    loading="lazy"
                  />
                </div>
                <div className={cx('about')}>
                  <span className={cx('name')}>{data.name}</span>
                  <div className={cx('bottom')}>
                    <span className={cx('price')}>
                      {formatter.format(data.price)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      {visible < dataProducts.length ? (
        <div className={cx('load')}>
          <button className={cx('btn')} onClick={HandlerLoadMore}>
            <span>Xem Thêm</span>
          </button>
        </div>
      ) : (
        ''
      )}
    </section>
  );
}
