import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import Wrapper from '../ui/wrapper';

const cx = classNames.bind(styles);

const Category = dynamic(() => import('@/components/category/category'));

export default function SearchProduct({ products }) {
  const valueSearch = useSelector(state => state.search.valueSearch);

  let list;

  if (valueSearch) {
    list = products.filter(item => item.name.includes(valueSearch));
  } else {
    list = products;
  }

  return (
    <Wrapper>
      <div className={cx('container')}>
        <h3 className={cx('title')}>Tìm Kiếm</h3>
        <Category listProducts={list}></Category>
      </div>
    </Wrapper>
  );
}
