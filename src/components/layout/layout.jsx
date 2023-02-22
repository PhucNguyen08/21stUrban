import Navbar from './navbar';
import Footer from './footer';
import classNames from 'classnames/bind';
import styles from './layout.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

export default function Layout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <ToastContainer />
      <Navbar />
      <main className={cx('main')}>{children}</main>
      <Footer />
    </div>
  );
}
