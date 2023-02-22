import { useState } from 'react';
import Policy from '../policy/policy';
import Image from 'next/image';
import Wrapper from '../ui/wrapper';
import styles from './tabs.module.scss';
import classNames from 'classnames/bind';
import Size from '@/assets/image/size.jpg';

const cx = classNames.bind(styles);

const tabsList = ['Mô tả sản phẩm', 'Mlb size chart', 'Chính sách đổi/trả'];

export default function TabsProduct(props) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabIndexChange = tabIndex => {
    setTabIndex(tabIndex);
  };

  return (
    <Wrapper>
      <div className={cx('tabs-wrapper')}>
        <ul className={cx('tabs')}>
          {tabsList.map((tab, i) => (
            <li key={i} onClick={() => handleTabIndexChange(i)}>
              <h3
                className={
                  tabIndex === i ? cx('tab-name', 'tab-active') : cx('tab-name')
                }
              >
                {tab}
              </h3>
            </li>
          ))}
        </ul>
        <div className={cx('tabs-list')}>
          <div
            className={
              tabIndex === 0
                ? cx('tab-content', 'tab-content--active')
                : cx('tab-content')
            }
          >
            <p className={cx('name')}>
              Vài nét về <strong>{props.productDetail.name} :</strong>
            </p>
            {props.productDetail.description.map((desc, i) => (
              <p className={cx('description')} key={i}>
                {desc}
              </p>
            ))}
          </div>
          <div
            className={
              tabIndex === 1
                ? cx('tab-content', 'tab-content--active')
                : cx('tab-content')
            }
          >
            <span className={cx('size-title')}>Bảng size giày MLB</span>
            <div className={cx('img')}>
              <Image src={Size} width={900} height={784} alt="Size" />
            </div>
            <span className={cx('origin')}>
              Nguồn: MLB-Korea - Hiệu chỉnh: MLB Vietnam
            </span>
          </div>
          <div
            className={
              tabIndex === 2
                ? cx('tab-content', 'tab-content--active')
                : cx('tab-content')
            }
          >
            <Policy />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
