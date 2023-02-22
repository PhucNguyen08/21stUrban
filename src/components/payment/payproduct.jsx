import { useSelector } from 'react-redux';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './payproduct.module.scss';
import { formatter } from '@/utils/formatter';
import UseInput from '@/hooks/use-input';
import { validateEmpty } from '@/utils/validateform';

const cx = classNames.bind(styles);

export default function PayProduct() {
  const [valueDiscount, setValueDiscount] = useState(0);
  const [isDiscount, setIsDiscount] = useState(false);
  const cartProduct = useSelector(state => state.cart.items);
  const totalMoney = useSelector(state => state.cart.totalAmount);
  const {
    valueInput: discountValueInput,
    error: discountHasError,
    handleChangeInput: discountChangeInput,
    handleBlurInput: discountBlurInput,
  } = UseInput(validateEmpty);

  const handleDiscountCode = () => {
    if (discountValueInput === 'Homie2023') {
      setValueDiscount(10);
      setIsDiscount(false);
    } else {
      setValueDiscount(0);
      setIsDiscount(true);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        {cartProduct.map(item => (
          <div className={cx('detail')}>
            <div className={cx('img')}>
              <img src={item.image} />
              <span className={cx('quantity')}>{item.quantity}</span>
            </div>
            <div className={cx('name')}>
              <span>{item.name}</span>
              <span>{item.size}</span>
            </div>
            <div className={cx('price')}>
              <span>{formatter.format(item.totalPrice)}</span>
            </div>
          </div>
        ))}
        <div className={cx('discount')}>
          {isDiscount && (
            <p className={cx('error-text')}>
              Mã giảm giá không chính xác hoặc đã hết hạn
            </p>
          )}
          {discountHasError && (
            <p className={cx('error-text')}>Vui lòng nhập mã giảm giá</p>
          )}
          <input
            type="text"
            placeholder="Mã giảm giá"
            onChange={discountChangeInput}
            onBlur={discountBlurInput}
          />
          <button onClick={handleDiscountCode}>Sử dụng</button>
        </div>
        <div className={cx('line-lists')}>
          <div className={cx('line-item')}>
            <div className={cx('price-info')}>
              <span>Tạm tính</span>
              <span>{formatter.format(totalMoney)}</span>
            </div>
            <div className={cx('price-info')}>
              <span>Phí vận chuyển</span>
              <span>0 đ</span>
            </div>
          </div>
          <div className={cx('line-item')}>
            <div className={cx('price-info')}>
              <span>Tổng cộng</span>
              <span className={cx('total-price')}>
                {valueDiscount}
                {formatter.format(totalMoney * (1 - valueDiscount / 100))}
              </span>
            </div>
          </div>
          <div className={cx('line-item')}>
            <div className={cx('description')}>
              <p>
                21ST URBAN sẽ xác nhận lại đơn hàng thông qua số điện thoại mà
                bạn cung cấp. Ở phần ghi chú, bạn vui lòng để lại thêm một số
                điện thoại khác mà 21ST URBAN có thể liên lạc để xác nhận đơn
                trong trường hợp chúng tôi không liên lạc với bạn.
              </p>
              <p>Xin vui lòng để ý điện thoại để xác nhận bạn nhé.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
