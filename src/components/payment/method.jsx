import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './method.module.scss';

const cx = classNames.bind(styles);

export default function MethodPayment(props) {
  const [methodValue, setMethodValue] = useState('');

  const handleChangeValue = e => {
    setMethodValue(e.target.value);
  };

  props.handleMethod(methodValue);

  return (
    <div className={cx('wrapper')}>
      <h4>Phương thức thanh toán</h4>
      <div className={cx('content')}>
        <div className={cx('item')}>
          <input
            type="radio"
            name="payment"
            value="Thanh toán khi nhận hàng - Cash on Delivery (COD)"
            required
            onChange={handleChangeValue}
          />
          <label>Thanh toán khi nhận hàng - Cash on Delivery (COD)</label>
        </div>
        <div className={cx('item')}>
          <input
            type="radio"
            name="payment"
            value="Thanh toán chuyển khoản - Internet Banking"
            onChange={handleChangeValue}
          />
          <label>Thanh toán chuyển khoản - Internet Banking</label>
        </div>
      </div>
    </div>
  );
}
