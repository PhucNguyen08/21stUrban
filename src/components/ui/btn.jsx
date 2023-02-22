import classNames from 'classnames/bind';
import styles from './btn.module.scss';

const cx = classNames.bind(styles);

const Button = ({ children }) => {
  return <button className={cx('btn')}>{children}</button>;
};

export default Button;
