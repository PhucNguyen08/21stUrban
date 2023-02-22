import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { categoryList } from './data-menu';

const cx = classNames.bind(styles);

export default function Menu(props) {
  const [valueRadio, setValueRadio] = useState('default');

  const handleChangeValue = e => {
    const getValue = e.target.value;
    props.handleSort(getValue);
    setValueRadio(getValue);
  };

  return (
    <div className={cx('block')}>
      {categoryList.map((catg, index) => (
        <aside key={index} className={cx('aside-item')}>
          <div className={cx('title')}>
            <h3>{catg.title}</h3>
            <div className={cx('collapsible')}>
              <FontAwesomeIcon icon={faChevronUp} className={cx('icon')} />
            </div>
          </div>
          <div className={cx('aside-content')}>
            <ul>
              {catg.isRadio &&
                catg.label.map((lb, i) => (
                  <li key={i}>
                    <input
                      type="radio"
                      name="sort"
                      value={lb.value}
                      checked={valueRadio === lb.value}
                      onChange={handleChangeValue}
                    />
                    <label>
                      <span>{lb.name}</span>
                    </label>
                  </li>
                ))}
              {catg.isCheckBox &&
                catg.label.map((lb, i) => (
                  <li key={i}>
                    <input type="checkbox" name="lb" value={lb} />
                    <label>
                      <span>{lb}</span>
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      ))}
    </div>
  );
}
