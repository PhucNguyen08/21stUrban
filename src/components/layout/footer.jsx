import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './footer.module.scss';
import Wrapper from '../ui/wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'antd';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx('wrapper')}>
      <footer className={cx('middle')}>
        <Wrapper>
          <Row gutter={32}>
            <Col xs={12} md={12} lg={6} xl={6} className={cx('menu')}>
              <div className={cx('item')}>
                <h3 className={cx('title')}>Information</h3>
                <ul className={cx('category')}>
                  <li className={cx('category-item')}>
                    <Link
                      href="/privacy-policy"
                      className={cx('category-link')}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className={cx('category-item')}>
                    <Link href="/refund-policy" className={cx('category-link')}>
                      Refund Policy
                    </Link>
                  </li>
                  <li className={cx('category-item')}>
                    <Link
                      href="/shipping-return-policy"
                      className={cx('category-link')}
                    >
                      Shipping & Return
                    </Link>
                  </li>
                  <li className={cx('category-item')}>
                    <Link
                      href="/term-conditions"
                      className={cx('category-link')}
                    >
                      Term & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} xl={6} className={cx('menu')}>
              <div className={cx('item')}>
                <h3 className={cx('title')}>Quick Links</h3>
                <ul className={cx('category')}>
                  <li className={cx('category-item')}>
                    <Link href="/account" className={cx('category-link')}>
                      My Account
                    </Link>
                  </li>
                  <li className={cx('category-item')}>
                    <Link href="/cart" className={cx('category-link')}>
                      Cart
                    </Link>
                  </li>
                  <li className={cx('category-item')}>
                    <Link href="/wishlist" className={cx('category-link')}>
                      Wishlist
                    </Link>
                  </li>
                  <li className={cx('category-item')}>
                    <Link
                      href="/product-compare"
                      className={cx('category-link')}
                    >
                      Product Compare
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} xl={6} className={cx('menu')}>
              <div className={cx('item')}>
                <h3 className={cx('title')}>Our Store</h3>
                <ul className={cx('category')}>
                  <li className={cx('category-item')}>
                    <p className={cx('location')}>
                      Find a location nearest <br></br> you.&nbsp;
                      <Link href="/" className={cx('decoration')}>
                        See Our Stores
                      </Link>
                    </p>
                  </li>
                  <li className={cx('category-item')}>
                    <span>+84 (0)387 392 056</span>
                  </li>
                  <li className={cx('category-item')}>
                    <span>hello@domain.com</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} xl={6} className={cx('menu')}>
              <div className={cx('item')}>
                <h3 className={cx('title')}>Subscribe</h3>
                <ul className={cx('category')}>
                  <li className={cx('category-item')}>
                    <p className={cx('newsletter')}>
                      Enter your email below to be the first to <br></br> know
                      about new collections and product <br></br> launches.
                    </p>
                  </li>
                  <li className={cx('category-item')}>
                    <div className={cx('relative')}>
                      <input
                        placeholder="Enter your email"
                        className={cx('input')}
                      />
                      <span className={cx('icon-envelope')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <button className={cx('btn-email')}>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className={cx('icon-arrow')}
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Wrapper>
      </footer>
      <footer className={cx('bottom')}>
        <Wrapper>
          <div className={cx('brand')}>
            <span>@21ST 2022</span>
          </div>
        </Wrapper>
      </footer>
    </div>
  );
}
