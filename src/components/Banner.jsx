import React from "react";

function Banner() {
  return (
    <div className='banner relative'>
      <img
        src='/images/banner/banner.jpg'
        alt='Hero'
        className='banner-img'
      />
      <div className='absolute w-full z-10 top-82 md:top-104.75 xl:top-120.25  px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl) '>
        <div className='banner-des  max-w-7xl mx-auto'>
          <p className='banner-text-first'>
            Get everyting you need for your fashion look and life style
          </p>
          <p className='banner-text-second'>
            Find everything you need for your perfect fashion statement.
          </p>
          <a className='box-btn-explore'>
            <button className='btn-login text-[16px] h-full py-5 w-[169px]'>
              Explore More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
