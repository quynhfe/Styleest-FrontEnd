import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOnclickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header
      className={`header-box ${
        isMenuOpen ? `lg:bg-inherit bg-(--color-text-dark)` : ``
      }`}>
      <nav className='header'>
        <p className='brand-name'>Styleest</p>
        <div
          className={`navbar-box ${
            isMenuOpen
              ? `lg:bg-inherit bg-(--color-text-dark) top-(--top-show-s) md:top-(--top-show-m) flex-col justify-center items-center gap-8 p-4 md:py-20 lg:py-0`
              : `lg:block hidden`
          }`}>
          <ul className='navbar'>
            <li className='flex'>
              <a className='nav-title'>About us</a>
            </li>
            <li>
              <a className='nav-title'>Collaboration</a>
            </li>
            <li>
              <a className='nav-title'> Product</a>
            </li>
            <li>
              <a className='nav-title'>Articles</a>
            </li>
          </ul>
          <a className={`w-35 lg:hidden ${isMenuOpen ? `block` : `hidden`}`}>
            <button className='btn-login'>Login</button>
          </a>
        </div>
        <div className='nav-actions'>
          <span className='nav-logo-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='nav-logo-icon'>
              <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
            </svg>
          </span>
          <span className='nav-logo-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='nav-logo-icon'>
              <path d='M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z'></path>
            </svg>
          </span>

          <a className='w-35 lg:block hidden'>
            <button className='btn-login'>Login</button>
          </a>
          <span
            className='nav-logo-box lg:hidden'
            onClick={handleOnclickMenu}>
            {isMenuOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='nav-logo-icon'>
                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='nav-logo-icon'>
                <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
              </svg>
            )}
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
