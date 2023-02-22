import { useSelector } from 'react-redux';
import Image from 'next/image';
import Wrapper from '../ui/wrapper';
import CartItem from './cartitem';
import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import cart from '@/assets/image/cart.png';

const cx = classNames.bind(styles);

const CartList = props => {
  const isCart = useSelector(state => state.cart.isCart);
  // console.log(isCart);

  return (
    <Wrapper>
      <div className={cx('wrapper')}>
        <h3 className={cx('text')}>Giỏ hàng của bạn</h3>
        {isCart && (
          <div className={cx('header-info')}>
            <div>Thông tin sản phẩm</div>
            <div>Đơn giá</div>
            <div>Số lượng</div>
            <div>Thành tiền</div>
          </div>
        )}
        {isCart && <CartItem />}
        {!isCart && (
          <div className={cx('message')}>
            <Image src={cart} width={250} height={160} alt="cart" />
            <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default CartList;
