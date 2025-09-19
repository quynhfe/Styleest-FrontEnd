import React, { useEffect, useState } from "react";
import Button from "../components/button";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const handleOnclickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getBreakpoint = (width) => {
    if (width < 640) return "base";
    if (width < 768) return "sm";
    if (width < 1024) return "md";
    if (width < 1280) return "lg";
    if (width < 1536) return "xl";
    return "2xl";
  };
  useEffect(() => {
    let prevBp = getBreakpoint(window.innerWidth);

    const handleResize = () => {
      let resizeTimer;
      const currBp = getBreakpoint(window.innerWidth);

      if (prevBp !== currBp) {
        setIsMenuOpen(false);
        setIsResizing(true);
        prevBp = currBp;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => setIsResizing(false), 200);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Login = () => {
    <Button
      className={
        "py-[14px] text-[14px] tracking-(--t-14)  lg:hidden cursor-pointer"
      }>
      Login
    </Button>;
  };
  return (
    <div className='relative z-1 top-0'>
      <header
        className={`py-8.25  lg:py-4 md:pt-11 lg:border-b-[0.5px] lg:border-(--color-boxshadow-header)  w-full px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl) ${
          isMenuOpen ? `lg:bg-inherit  ` : ``
        }`}>
        <div
          className={` block lg:hidden  bg-inherit border-b-[0.5px] border-(--color-boxshadow-header) h-[461px] md:h-[639px] transform  transition-discretess -translate-y-98.75 md:-translate-y-140.75 w-full absolute z-[-2]  left-0
          ${
            isResizing
              ? "transition-none"
              : "transition  duration-400 ease-in-out"
          }
          ${
            isMenuOpen
              ? "bg-text-dark translate-y-[-109px]  md:translate-y-[-125px] "
              : ""
          }`}></div>
        <nav className='lg:h-fit h-auto md:mx-0  text-white  flex justify-between items-center max-w-screen mx-auto'>
          <p className='tracking-(--t-48) cursor-pointer xl:w-65 font-(family-name:--font-header) uppercase md:text-(length:--text-32) lg:text-2xl text-2xl font-bold content-center flex items-center'>
            Styleest
          </p>
          <div
            className={` leading-0 bg-inherit    mx-auto w-full lg:w-fit lg:min-h-fit lg:relative absolute  min-h-(--height-mid)  flex flex-col gap-8 justify-end items-center content-center  left-0   ${
              isMenuOpen
                ? "lg:bg-inherit  transform  transition-all transition-discretess duration-300 ease-in-out translate-y-44 md:translate-y-64.25 z-[-1]   p-0 md:py-20 lg:py-0 "
                : "lg:block lg:pb-0 lg:opacity-100 hidden opacity-0 "
            }`}>
            <div
              className={`font-(family-name:--font-header)  flex flex-col lg:flex-row items-center  lg:justify-between lg:gap-9 gap-8 text-xl
             `}>
              <a
                href='#about-us'
                className='nav-title'>
                About us
              </a>
              <a
                href='#collaboration'
                className='nav-title'>
                Collaboration
              </a>
              <a
                href='#product'
                className='nav-title'>
                Product
              </a>
              <a
                href='#articles'
                className='nav-title'>
                Articles
              </a>
            </div>
            <div className={`${isMenuOpen ? "block " : "hidden"} w-35 h-11.75`}>
              <Login />
            </div>
          </div>
          <div className='flex items-center h-fit relative justify-between md:gap-5 gap-2.5  '>
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
            <div className='lg:block hidden w-35 h-11.75'>
              <Login />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
