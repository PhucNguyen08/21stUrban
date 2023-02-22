import classNames from 'classnames/bind';
import styles from './inputnumber.module.scss';

const cx = classNames.bind(styles);

export default function InputNumber(props) {
  return (
    <div className={cx('quantity')}>
      <button
        onClick={props.handleInputMinus}
        className={props.cart ? cx('btn-minus', 'btn--width') : cx('btn-minus')}
      >
        -
      </button>
      <input
        onChange={props.handleQuantityInput}
        type="number"
        className={
          props.cart
            ? cx('quantity-input', 'input--cart')
            : cx('quantity-input')
        }
        min={1}
        max={100}
        step={1}
        value={props.quantityInput}
      />
      <button
        onClick={props.handleInputPlus}
        className={props.cart ? cx('btn-plus', 'btn--width') : cx('btn-plus')}
      >
        +
      </button>
    </div>
  );
}
