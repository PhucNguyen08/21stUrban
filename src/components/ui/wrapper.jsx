import classNames from 'classnames/bind';
import styles from './wrapper.module.scss';

const cx = classNames.bind(styles);

export default function Wrapper({ children }) {
  return <div className={cx('main')}>{children}</div>;
}
