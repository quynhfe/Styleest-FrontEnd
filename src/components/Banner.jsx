import React from "react";

function Banner() {
  return (
    <div className='banner'>
      <img
        src='/images/banner/banner.jpg'
        alt='Hero'
        className='banner-img'
      />
      <div className='banner-des'>
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
  );
}

export default Banner;
