import React from "react";
import Button from "../components/button";
function Banner() {
  return (
    <div className='h-[622px] xl:h-[800px] relative'>
      <img
        src='/images/banner/banner.jpg'
        alt='Hero'
        className='h-full w-full object-top object-cover'
      />
      <div className='absolute w-full z-10 top-82 md:top-105.5 xl:top-120.25 px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl)'>
        <div className=' md:grid md:grid-flow-col-dense lg:grid-cols-2  xl:grid-cols-none gap-x-6 xl:gap-x-27 md:grid-rows-1 text-white flex flex-col gap-6 justify-center items-center md:items-start text-center max-w-screen mx-auto'>
          <p className='xl:leading-[86.4px]  xl:text-7xl   md:text-start md:text-[38px] md:leading-[45.6px] md:col-span-1 font-bold text-[28px] leading-[33.6px]'>
            Get everyting you need for your fashion look and life style
          </p>
          <div className='flex flex-col gap-8 w-fit lg:w-full xl:h-full lg:justify-end lg:items-end lg:col-span-1 '>
            <p className='md:w-64.25 xl:w-75.25 xl:row-start-2 xl:col-start-3 md:text-end font-medium text-(length:--text-16) xl:text-lg'>
              Find everything you need for your perfect fashion statement.
            </p>
            <div className='md:w-64.25 xl:w-75.25 xl:row-start-3 xl:col-start-3 right-0 md:justify-end flex items-center justify-center'>
              <div className='w-fit h-14.75'>
                <Button>Explore More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
