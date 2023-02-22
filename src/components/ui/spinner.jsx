import classNames from 'classnames/bind';
import styles from './spinner.module.scss';

const cx = classNames.bind(styles);

export default function Spinner() {
  return (
    <div className={cx('lds-roller')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
