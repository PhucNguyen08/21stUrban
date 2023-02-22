import { useState } from 'react';
import { Col, Row } from 'antd';
import { formatter } from '@/utils/formatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { toast } from 'react-toastify';
import UseNumber from '@/hooks/use-number';
import InputNumber from '../ui/inputnumber';
import classNames from 'classnames/bind';
import styles from './productdetail.module.scss';
import Wrapper from '../ui/wrapper';
import 'animate.css';

const cx = classNames.bind(styles);

export default function ProductDetail(props) {
  const item = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const {
    quantity: quantityProduct,
    handleMinusProduct: handleMinusQuantity,
    handlePlusProduct: handlePlusQuantity,
    handleQuantityInput: handleQuantity,
  } = UseNumber();

  const { productDetail } = props;

  const [sizeProduct, setSizeProduct] = useState(() => {
    const sizeValue = productDetail.sizes.find(({ quantity }) => quantity > 0);
    return sizeValue.size;
  });

  const [slideIndex, setSlideIndex] = useState(1);

  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: productDetail.id,
        name: productDetail.name,
        size: sizeProduct,
        price: productDetail.price,
        quantity: quantityProduct,
        image: productDetail.image[0],
      })
    );
    toast.success('Đã thêm sản phẩm vào giỏ hàng', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleSlideIndex = slide => {
    setSlideIndex(slide);
  };

  return (
    <Wrapper>
      <div className={cx('info')}>
        <div className={cx('container')}>
          <Row gutter={[8, 0]}>
            <Col xs={24} md={24} lg={13} xl={11}>
              <div className={cx('left')}>
                <div>
                  {productDetail.image.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="image"
                      loading="lazy"
                      className={
                        slideIndex === i + 1
                          ? cx(
                              'img',
                              'img-active',
                              'animate__fadeIn',
                              'animate__animated'
                            )
                          : cx('img')
                      }
                    />
                  ))}
                </div>
                <div className={cx('swiper', 'swiper--margin')}>
                  {productDetail.image.map((img, i) => (
                    <div
                      key={i}
                      className={
                        slideIndex === i + 1
                          ? cx('swiper-slide', 'swiper-active')
                          : cx('swiper-slide')
                      }
                      onClick={() => handleSlideIndex(i + 1)}
                    >
                      <img
                        src={img}
                        alt="image"
                        className={cx('swiper-img')}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col xs={24} md={24} lg={11} xl={13}>
              <div className={cx('right')}>
                <h4 className={cx('name')}>{productDetail.name}</h4>
                <div className={cx('rate')}>
                  <FontAwesomeIcon icon={faStar} className={cx('icon')} />
                  <FontAwesomeIcon icon={faStar} className={cx('icon')} />
                  <FontAwesomeIcon icon={faStar} className={cx('icon')} />
                  <FontAwesomeIcon icon={faStar} className={cx('icon')} />
                  <FontAwesomeIcon icon={faStar} className={cx('icon')} />
                </div>
                <span className={cx('rate-title')}>Đánh giá sản phẩm này</span>
                <div className={cx('brand')}>
                  <span>
                    Thương Hiệu : <strong>{productDetail.brand}</strong>
                  </span>
                  <span className={cx('id-product')}>
                    Mã : <strong>{productDetail.id}</strong>
                  </span>
                </div>
                <div className={cx('price')}>
                  <span>{formatter.format(productDetail.price)}</span>
                </div>
                <div className={cx('sizes')}>
                  <span className={cx('size-name')}>
                    SIZE: <strong>{sizeProduct}</strong>
                  </span>
                  <div className={cx('lists')}>
                    {productDetail.sizes.map((sz, i) =>
                      !(sz.quantity === 0) ? (
                        <span
                          onClick={() => setSizeProduct(sz.size)}
                          key={i}
                          className={
                            sizeProduct == sz.size
                              ? cx('item', 'item-active')
                              : cx('item')
                          }
                        >
                          {sz.size}
                        </span>
                      ) : (
                        <span key={i} className={cx('item', 'item-disabled')}>
                          {sz.size}
                        </span>
                      )
                    )}
                  </div>
                  <div className={cx('quanity')}>
                    <InputNumber
                      cart={false}
                      handleInputMinus={handleMinusQuantity}
                      handleQuantityInput={handleQuantity}
                      handleInputPlus={handlePlusQuantity}
                      quantityInput={quantityProduct}
                    />
                  </div>
                  <div className={cx('actions')}>
                    <button
                      className={cx('btn-add', 'btn')}
                      onClick={addItemToCart}
                    >
                      Thêm Vào Giỏ Hàng
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
}
