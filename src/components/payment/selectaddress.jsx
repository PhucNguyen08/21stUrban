import classNames from 'classnames/bind';
import styles from './selectaddress.module.scss';

const cx = classNames.bind(styles);

export default function SelectAddress({ options, label, value, setValue }) {
  const handleChangeSelect = value => {
    setValue(value);
  };

  return (
    <div className={cx('wrapper')}>
      <select value={value} onChange={e => handleChangeSelect(e.target.value)}>
        <option value={''}>{`-- Chọn ${label} --`}</option>
        {options?.map(item => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
