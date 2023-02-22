import classNames from 'classnames/bind';
import styles from './form.module.scss';
import UseInput from '@/hooks/use-input';
import { validateEmail, validateEmpty } from '@/utils/validateform';

const cx = classNames.bind(styles);

export default function FormContact() {
  const {
    isValid: emailIsValid,
    valueInput: emailValueInput,
    error: emailHasError,
    handleChangeInput: emailChangeInput,
    handleBlurInput: emailBlurInput,
    handleResetInput: emailResetInput,
  } = UseInput(validateEmail);

  const {
    isValid: nameIsValid,
    valueInput: nameValueInput,
    error: nameHasError,
    handleChangeInput: nameChangeInput,
    handleBlurInput: nameBlurInput,
    handleResetInput: nameResetInput,
  } = UseInput(validateEmpty);

  const {
    isValid: messageIsValid,
    valueInput: messageValueInput,
    error: messageHasError,
    handleChangeInput: messageChangeInput,
    handleBlurInput: messageBlurInput,
    handleResetInput: messageResetInput,
  } = UseInput(validateEmpty);

  let formIsValid = false;
  if (emailIsValid && nameIsValid && messageIsValid) {
    formIsValid = true;
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log({
      name: nameValueInput,
      email: emailValueInput,
      message: messageValueInput,
    });

    nameResetInput();
    emailResetInput();
    messageResetInput();
  };

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>Liên Lạc</h2>
      <div className={cx('form')}>
        <h3>Bạn cần hỗ trợ ?</h3>
        <p>
          MLB rất hân hạnh được hỗ trợ bạn, hãy để lại thông tin cho chúng tôi
          nhé. Yêu cầu của bạn sẽ được xử lý và phản hồi trong thời gian sớm
          nhất.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Họ tên*</label>
          <input
            type="text"
            id="name"
            placeholder="Tên của bạn"
            onChange={nameChangeInput}
            onBlur={nameBlurInput}
            value={nameValueInput}
          />
          {nameHasError && (
            <p className={cx('error-text')}>Vui lòng nhập họ tên của bạn!</p>
          )}
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            id="email"
            placeholder="Email của bạn"
            onChange={emailChangeInput}
            onBlur={emailBlurInput}
            value={emailValueInput}
          />
          {emailHasError && (
            <p className={cx('error-text')}>
              Vui lòng nhập chính xác định dạng email!
            </p>
          )}
          <label htmlFor="mess">Tin nhắn*</label>
          <textarea
            type="text"
            id="mess"
            rows="4"
            cols="42"
            placeholder="Đừng ngại hỏi về đơn hàng của bạn"
            onChange={messageChangeInput}
            onBlur={messageBlurInput}
            value={messageValueInput}
          />
          {messageHasError && (
            <p className={cx('error-text')}>
              Vui lòng nhập thông tin bạn cần về đơn hàng!
            </p>
          )}
          <button disabled={!formIsValid}>Gửi</button>
        </form>
      </div>
    </div>
  );
}
