import { useState } from 'react';
import Wrapper from '../ui/wrapper';
import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import styles from './authform.module.scss';
import UseInput from '@/hooks/use-input';
import { validateEmail, validatePassword } from '@/utils/validateform';

const cx = classNames.bind(styles);

export default function AuthForm() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const {
    isValid: emailIsValid,
    valueInput: emailValueInput,
    error: emailHasError,
    handleChangeInput: emailChangeInput,
    handleBlurInput: emailBlurInput,
    handleResetInput: emailResetInput,
  } = UseInput(validateEmail);

  const {
    isValid: emailResetIsValid,
    valueInput: emailResetValueInput,
    error: emailResetHasError,
    handleChangeInput: emailResetChangeInput,
    handleBlurInput: emailResetBlurInput,
    handleResetInput: emailForgotReset,
  } = UseInput(validateEmail);

  const {
    isValid: passwordIsValid,
    valueInput: passwordValueInput,
    error: passwordHasError,
    handleChangeInput: passwordChangeInput,
    handleBlurInput: passwordBlurInput,
    handleResetInput: passwordResetInput,
  } = UseInput(validatePassword);

  let formLoginIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formLoginIsValid = true;
  }

  let formResetIsValid = false;
  if (emailResetIsValid) {
    formResetIsValid = true;
  }

  const handleForgotPassWord = e => {
    e.preventDefault();
    setIsForgotPassword(prev => !prev);
  };

  const loginHandler = e => {
    e.preventDefault();

    console.log({ email: emailValueInput, password: passwordValueInput });
    emailResetInput();
    passwordResetInput();
  };

  const resetPasswordHandler = e => {
    e.preventDefault();

    console.log({ email: emailResetValueInput });
    emailForgotReset();
  };

  return (
    <div className={cx('wrapper')}>
      <Wrapper>
        <div className={cx('container')}>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {isForgotPassword && (
                <div className={cx('reset')}>
                  <h3 className={cx('title')}>Đặt lại mật khẩu của bạn</h3>
                  <form onSubmit={resetPasswordHandler}>
                    <div className={cx('control')}>
                      <label htmlFor="email">
                        Chúng tôi sẽ gửi cho bạn email để đặt lại mật khẩu của
                        bạn.
                      </label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Nhập Email"
                        onChange={emailResetChangeInput}
                        onBlur={emailResetBlurInput}
                        value={emailResetValueInput}
                      />
                      {emailResetHasError && (
                        <p className={cx('error-text')}>
                          Vui lòng nhập chính xác định dạng email!
                        </p>
                      )}
                    </div>
                    <button
                      disabled={!formResetIsValid}
                      className={cx('btn', 'btn-reset')}
                    >
                      Submit
                    </button>
                    <button
                      className={cx('btn', 'btn-cancel')}
                      onClick={handleForgotPassWord}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              )}
              {!isForgotPassword && (
                <div className={cx('login')}>
                  <h3 className={cx('title')}>Đăng Nhập</h3>
                  <form onSubmit={loginHandler}>
                    <div className={cx('control')}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Nhập Email"
                        onChange={emailChangeInput}
                        onBlur={emailBlurInput}
                        value={emailValueInput}
                      />
                      {emailHasError && (
                        <p className={cx('error-text')}>
                          Vui lòng nhập chính xác định dạng email!
                        </p>
                      )}
                    </div>
                    <div className={cx('control')}>
                      <label htmlFor="password">Mật Khẩu</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Nhập Mật Khẩu"
                        onChange={passwordChangeInput}
                        onBlur={passwordBlurInput}
                        value={passwordValueInput}
                      />
                      {passwordHasError && (
                        <p className={cx('error-text')}>
                          Vui lòng nhập trên 8 ký tự!
                        </p>
                      )}
                    </div>
                    <a onClick={handleForgotPassWord}>Quên mật khẩu?</a>
                    <button
                      disabled={!formLoginIsValid}
                      className={cx('btn', 'btn-login')}
                    >
                      Sign In
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className={cx('register')}>
                <h3 className={cx('title')}>New Customer</h3>
                <span className={cx('description')}>
                  Sign up for early Sale access plus tailored new arrivals,
                  trends and promotions. To opt out, click unsubscribe in our
                  emails.
                </span>
                <button className={cx('btn', 'btn-register')}>Register</button>
              </div>
            </Col>
          </Row>
        </div>
      </Wrapper>
    </div>
  );
}
