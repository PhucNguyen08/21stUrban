import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import Banner from '@/assets/image/banner.jpg';
import Logo from '@/assets/image/logo.png';
import classNames from 'classnames/bind';
import styles from './payment.module.scss';
import { Row, Col } from 'antd';
import FormCheckOut from './formcheckout';

const PayProduct = dynamic(() => import('./payproduct'));

const cx = classNames.bind(styles);

function PayMent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('banner')}>
        <Image src={Banner} fill alt="Banner" priority />
      </div>
      <div className={cx('content')}>
        <div className={cx('container')}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className={cx('main')}>
                <div className={cx('logo')}>
                  <Image src={Logo} fill alt="Logo" />
                </div>
                <div className={cx('information')}>
                  <div className={cx('title')}>
                    <h4>Thông tin giao hàng</h4>
                  </div>
                  <div className={cx('text')}>
                    <p>
                      Bạn đã có tài khoản?{' '}
                      <Link href={'/user/login'}>
                        <span>Đăng nhập</span>
                      </Link>
                    </p>
                  </div>
                  <FormCheckOut />
                  <footer className={cx('footer')}></footer>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <PayProduct />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default PayMent;
