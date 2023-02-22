import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './serviceitem.module.scss';

const cx = classNames.bind(styles);

export default function ServiceItem(props) {
  return (
    <div className={cx('item')}>
      <Image src={props.image} alt={props.heading} width={30} height={30} />
      <div className={cx('promise')}>
        <h4>{props.heading}</h4>
        <p>{props.resolution}</p>
      </div>
    </div>
  );
}
