import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import styles from './formcheckout.module.scss';
import { Row, Col } from 'antd';
import SelectAddress from './selectaddress';
import { getAllProvinces, getAllDistricts, getAllWards } from '@/service/api';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import UseInput from '@/hooks/use-input';
import {
  validateEmail,
  validateEmpty,
  validatePhoneNumber,
} from '@/utils/validateform';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { toast } from 'react-toastify';

const MethodPayMent = dynamic(() => import('./method'));

const cx = classNames.bind(styles);

export default function FormCheckOut() {
  const router = useRouter();
  const dispatch = useDispatch();
  const listProducts = useSelector(state => state.cart.items);
  const {
    isValid: emailIsValid,
    valueInput: emailValueInput,
    error: emailHasError,
    handleChangeInput: emailChangeInput,
    handleBlurInput: emailBlurInput,
  } = UseInput(validateEmail);
  const {
    isValid: nameIsValid,
    valueInput: nameValueInput,
    error: nameHasError,
    handleChangeInput: nameChangeInput,
    handleBlurInput: nameBlurInput,
  } = UseInput(validateEmpty);
  const {
    isValid: phoneIsValid,
    valueInput: phoneValueInput,
    error: phoneHasError,
    handleChangeInput: phoneChangeInput,
    handleBlurInput: phoneBlurInput,
  } = UseInput(validatePhoneNumber);
  const {
    isValid: addressIsValid,
    valueInput: addressValueInput,
    error: addressHasError,
    handleChangeInput: addressChangeInput,
    handleBlurInput: addressBlurInput,
  } = UseInput(validateEmpty);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [ward, setWard] = useState();
  const [noteValue, setNoteValue] = useState('');

  useEffect(() => {
    getAllProvinces()
      .then(data => setProvinces(data))
      .catch(err => alert(err));
  }, []);

  useEffect(() => {
    province &&
      getAllDistricts(province)
        .then(data => setDistricts(data.districts))
        .catch(err => alert(err));
  }, [province]);

  useEffect(() => {
    district &&
      getAllWards(district)
        .then(data => setWards(data.wards))
        .catch(err => alert(err));
  }, [district]);

  let formIsValid = false;
  if (emailIsValid && nameIsValid && phoneIsValid && addressIsValid) {
    formIsValid = true;
  }

  const handleChangeNoteValue = e => {
    setNoteValue(e.target.value);
  };

  let valuePayment = '';

  const handleValuePayment = value => {
    valuePayment = value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      info: {
        name: nameValueInput,
        email: emailValueInput,
        phoneNumber: phoneValueInput,
        address: addressValueInput,
        province: provinces?.find(item => item.code === +province).name,
        district: districts?.find(item => item.code === +district).name,
        ward: wards?.find(item => item.code === +ward).name,
        note: noteValue,
        products: listProducts,
        MethodPayMent: valuePayment,
      },
    });
    toast.success('Bạn đã hoàn tất đơn hàng', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    router.push('/');
    dispatch(cartActions.resetCart());
  };

  return (
    <div className={cx('wrapper')}>
      <form onSubmit={handleSubmit}>
        <Row gutter={[0, 8]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className={cx('field')}>
              <input
                placeholder="Họ và tên"
                type="text"
                className={cx('input')}
                onChange={nameChangeInput}
                onBlur={nameBlurInput}
                value={nameValueInput}
              />
              {nameHasError && (
                <p className={cx('error-text')}>Vui lòng nhập họ tên !</p>
              )}
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={15} xl={15}>
            <div className={cx('field', 'field-email')}>
              <input
                placeholder="Email"
                type="text"
                className={cx('input')}
                onChange={emailChangeInput}
                onBlur={emailBlurInput}
                value={emailValueInput}
              />
              {emailHasError && (
                <p className={cx('error-text')}>
                  Vui lòng nhập đúng định dạng Email !
                </p>
              )}
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={9} xl={9}>
            <div className={cx('field')}>
              <input
                placeholder="Số điện thoại"
                type="number"
                className={cx('input')}
                onChange={phoneChangeInput}
                onBlur={phoneBlurInput}
                value={phoneValueInput}
              />
              {phoneHasError && (
                <p className={cx('error-text')}>
                  Vui lòng nhập đúng số điện thoại !
                </p>
              )}
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className={cx('field')}>
              <input
                placeholder="Địa chỉ"
                type="text"
                className={cx('input')}
                onChange={addressChangeInput}
                onBlur={addressBlurInput}
                value={addressValueInput}
              />
              {addressHasError && (
                <p className={cx('error-text')}>Vui lòng nhập địa chỉ !</p>
              )}
            </div>
          </Col>
        </Row>
        <div className={cx('section-address')}>
          <div>
            <SelectAddress
              label="Tỉnh/ Thành Phố"
              options={provinces}
              value={province}
              setValue={setProvince}
            />
          </div>
          <div>
            <SelectAddress
              label="Quận/ Huyện"
              options={districts}
              value={district}
              setValue={setDistrict}
            />
          </div>
          <div>
            <SelectAddress
              label="Phường/ Xã"
              options={wards}
              value={ward}
              setValue={setWard}
            />
          </div>
        </div>
        <div className={cx('note')}>
          <textarea
            placeholder="Ghi chú"
            rows="5"
            cols="30"
            value={noteValue}
            onChange={handleChangeNoteValue}
          />
        </div>
        <MethodPayMent handleMethod={handleValuePayment} />
        <div className={cx('action')}>
          <div className={cx('previous')}>
            <Link href={'/user/cart'}>
              <FontAwesomeIcon icon={faArrowLeft} className={cx('icon')} />
              <span>Giỏ hàng</span>
            </Link>
          </div>
          <button disabled={!formIsValid}>Hoàn tất đơn hàng</button>
        </div>
      </form>
    </div>
  );
}
