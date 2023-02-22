import { useState } from 'react';
import Menu from '../menu/menu';
import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import styles from './category.module.scss';
import ProductItem from '../product/product-item';

const cx = classNames.bind(styles);

export default function Category({ listProducts }) {
  const [arrayProducts, setArrayProducts] = useState(listProducts);

  const sortProducts = action => {
    switch (action) {
      case 'default':
        setArrayProducts(listProducts.slice());
        break;
      case 'sortAZ':
        setArrayProducts(
          listProducts.slice().sort((a, b) => a.name.localeCompare(b.name))
        );
        break;
      case 'sortZA':
        setArrayProducts(
          listProducts
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .reverse()
        );
        break;
      case 'asc':
        setArrayProducts(
          listProducts.slice().sort((a, b) => a.price - b.price)
        );
        break;
      case 'desc':
        setArrayProducts(
          listProducts.slice().sort((a, b) => b.price - a.price)
        );
        break;
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Row>
          <Col xs={8} sm={8} md={6} lg={6} xl={6}>
            <div className={cx('left')}>
              <Menu handleSort={sortProducts} />
            </div>
          </Col>
          <Col xs={16} sm={16} md={18} lg={18} xl={18}>
            <div className={cx('right')}>
              {arrayProducts?.length === 0 && (
                <div className={cx('error-text')}>
                  Không có sản phẩm bạn cần tìm
                </div>
              )}
              <Row>
                {arrayProducts?.map(data => (
                  <Col key={data.id} xs={12} sm={12} md={12} lg={8} xl={8}>
                    <ProductItem data={data} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
