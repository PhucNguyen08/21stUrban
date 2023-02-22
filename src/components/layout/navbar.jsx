import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective-extreme.css';
import classNames from 'classnames/bind';
import styles from './navbar.module.scss';
import Logo from '@/assets/image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faGoogle,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons';
import { BackDropNavbar } from '../ui/modal';
import { searchActions } from '../store/search-slice';

const cx = classNames.bind(styles);

export default function Navbar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const router = useRouter();
  const searchRef = useRef();
  const inputRef = useRef();
  const navRef = useRef();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleClickToggle = () => {
    navRef.current.classList.toggle(cx('responsive-nav'));
    setIsOpen(prev => !prev);
  };

  const handleChangeValueSearch = e => {
    dispatch(searchActions.setValueSearch(e.target.value));
  };

  const handleHideMenu = () => {
    navRef.current.classList.toggle(cx('responsive-nav'));
    setIsOpen(false);
  };

  const handleShowSearch = () => {
    searchRef.current.classList.add(cx('responsive-search'));
    setIsSearched(true);
  };

  const handleHideSearch = () => {
    searchRef.current.classList.remove(cx('responsive-search'));
    setIsSearched(false);
  };

  const handleClickSearch = () => {
    if (!inputRef.current.value) {
      dispatch(searchActions.setValueSearch(''));
    }
    router.push(`/search?value=${inputRef.current.value}`);
    inputRef.current.value = '';
  };

  const handleEnterSearch = e => {
    if (e.keyCode === 13) {
      handleClickSearch();
    }
  };

  return (
    <div className={cx('wrapper', 'sticky')}>
      <header className={cx('header')}>
        {isOpen && <BackDropNavbar onClick={handleHideMenu} />}
        {isSearched && <BackDropNavbar onClick={handleHideSearch} />}
        <div className={cx('logo')}>
          <Link href="/">
            <Image src={Logo} alt="logo" width={200} height={50} />
          </Link>
        </div>
        <ul ref={navRef} className={cx('nav-lists')}>
          <li>
            <Link href="/" className={cx('nav-link')}>
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link href="/products" className={cx('nav-link')}>
              Sản Phẩm
            </Link>
          </li>
          <li>
            <Link href="/introduce" className={cx('nav-link')}>
              Giới Thiệu
            </Link>
          </li>
          <li>
            <Link href="/contact" className={cx('nav-link')}>
              Liên Hệ
            </Link>
          </li>
          {isOpen && (
            <ul className={cx('lists-icon')}>
              <li className={cx('item-icon')}>
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li className={cx('item-icon')}>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li className={cx('item-icon')}>
                <FontAwesomeIcon icon={faPaypal} />
              </li>
              <li className={cx('item-icon')}>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className={cx('item-icon')}>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
              <li className={cx('item-icon')}>
                <FontAwesomeIcon icon={faGoogle} />
              </li>
            </ul>
          )}
        </ul>
        <ul className={cx('nav')}>
          <div ref={searchRef} className={cx('nav-search')}>
            <input
              ref={inputRef}
              placeholder="Tìm Kiếm Sản Phẩm"
              className={cx('nav-search__input')}
              onChange={handleChangeValueSearch}
            />
            <button
              onClick={handleClickSearch}
              className={cx('nav-search__btn')}
              onKeyDown={handleEnterSearch}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={cx('nav-search__icon')}
              />
            </button>
            <button className={cx('nav-close')} onClick={handleHideSearch}>
              <FontAwesomeIcon icon={faClose} className={cx('icon-close')} />
            </button>
          </div>
          <ul className={cx('nav-icon')}>
            <li className={cx('nav-icon--active')}>
              <Tippy
                interactive={true}
                animation="perspective-extreme"
                content={<span>Tìm Kiếm</span>}
              >
                <button className={cx('nav-btn')} onClick={handleShowSearch}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={cx('nav-icon__btn')}
                  />
                </button>
              </Tippy>
            </li>
            <li>
              <Tippy
                interactive={true}
                animation="perspective-extreme"
                content={<span>Tài Khoản</span>}
              >
                <Link href="/user/login">
                  <button className={cx('nav-btn')}>
                    <FontAwesomeIcon
                      icon={faUser}
                      className={cx('nav-icon__btn')}
                    />
                  </button>
                </Link>
              </Tippy>
            </li>
            <li>
              <Link href="/user/cart">
                <button className={cx('nav-btn')}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className={cx('nav-icon__btn')}
                  />
                  <strong className={cx('nav-icon__quanity')}>
                    {totalQuantity}
                  </strong>
                </button>
              </Link>
            </li>
            <li className={cx('icon-menu')}>
              <button onClick={handleClickToggle} className={cx('nav-btn')}>
                <FontAwesomeIcon
                  icon={faBars}
                  className={cx('nav-icon__btn')}
                />
              </button>
            </li>
          </ul>
        </ul>
      </header>
    </div>
  );
}
