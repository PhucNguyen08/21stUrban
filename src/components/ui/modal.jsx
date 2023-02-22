import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';
import 'animate.css';

const cx = classNames.bind(styles);

const BackDrop = props => {
  return <div onClick={props.onClick} className={cx('backdrop')}></div>;
};

const BackDropNavbar = props => {
  return (
    <div
      onClick={props.onClick}
      className={cx('backdrop-navbar', 'animate__animated', 'animate__fadeIn')}
    ></div>
  );
};

const ModalOverlay = props => {
  return (
    <div className={cx('modal')}>
      <div className={cx('content')}>{props.children}</div>
    </div>
  );
};

if (typeof window !== 'undefined') {
  const portalElement = document.getElementById('modal-root');
}

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClickModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export { BackDropNavbar };
