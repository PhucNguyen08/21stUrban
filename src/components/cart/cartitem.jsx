import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import InputNumber from '../ui/inputnumber';
import classNames from 'classnames/bind';
import styles from './cartitem.module.scss';
import { formatter } from '@/utils/formatter';
import { cartActions } from '../store/cart-slice';

const cx = classNames.bind(styles);

const CartItem = props => {
    const router = useRouter();
    const listProducts = useSelector(state => state.cart.items);
    console.log(listProducts);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();

    const handleIncreQuantity = product => {
        dispatch(
            cartActions.addQuantityItemToCart({
                id: product.id,
                price: product.price,
                size: product.size,
            })
        );
    };

    const handleDecreaseQuantity = item => {
        dispatch(
            cartActions.removeQuantityItemToCart({
                id: item.id,
                size: item.size,
            })
        );
    };

    const handleRemoveItem = item => {
        dispatch(
            cartActions.removeItemToCart({ id: item.id, size: item.size })
        );
    };

    const handleChangeInput = item => {
        dispatch(
            cartActions.changeQuanityToCart({
                id: item.id,
                quantity: +item.quantity,
                size: item.size,
            })
        );
    };

    return (
        <>
            <div className={cx('wrapper')}>
                {listProducts.map(item => (
                    <div className={cx('row')} key={item.id}>
                        <div className={cx('product')}>
                            <Link
                                href={`/products/${item.id}`}
                                className={cx('image')}
                            >
                                <img src={item.image} alt={item.name} />
                            </Link>
                            <div className={cx('detail')}>
                                <div className={cx('name')}>
                                    <h4 className={cx('title')}>{item.name}</h4>
                                    <span className={cx('size')}>
                                        {item.size}
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleRemoveItem({
                                                id: item.id,
                                                size: item.size,
                                            })
                                        }
                                        className={cx('btn-delete')}
                                    >
                                        Xóa
                                    </button>
                                </div>

                                <div className={cx('initial-price')}>
                                    <span>{formatter.format(item.price)}</span>
                                </div>

                                <div className={cx('actions')}>
                                    <InputNumber
                                        cart={true}
                                        quantityInput={item.quantity}
                                        handleQuantityInput={e =>
                                            handleChangeInput({
                                                id: item.id,
                                                quantity: e.target.value,
                                                size: item.size,
                                            })
                                        }
                                        handleInputMinus={() =>
                                            handleDecreaseQuantity({
                                                id: item.id,
                                                size: item.size,
                                            })
                                        }
                                        handleInputPlus={() =>
                                            handleIncreQuantity({
                                                id: item.id,
                                                price: item.price,
                                                size: item.size,
                                            })
                                        }
                                    />
                                </div>
                                <div className={cx('total-price')}>
                                    <span>
                                        {formatter.format(item.totalPrice)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx('pay')}>
                <div className={cx('pay__total')}>
                    <div className={cx('pay__total-price')}>
                        <span>Tổng tiền:</span>
                        <span className={cx('price')}>
                            {formatter.format(totalAmount)}
                        </span>
                    </div>
                    <div className={cx('pay__total-btn')}>
                        <button
                            onClick={() => router.push('/user/cart/checkout')}
                        >
                            Thanh Toán
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;
