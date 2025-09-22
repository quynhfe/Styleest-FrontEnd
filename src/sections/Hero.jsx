import React from "react";
import Button from "../components/button";
function Hero() {
  return (
    <div className='px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl) '>
      <div className='max-w-300 mx-auto'>
        <div className='h-max  mt-[295px] grid grid-flow-row grid-cols-1  gap-4 md:grid-cols-4 md:gap-y-11 md:gap-x-22 lg:gap-y-4 lg:grid-cols-5 xl:gap-y-4 items-center   text-(--color-bg-secondary) md:mt-85 lg:mt-[49px] xl:mt-[77px]  '>
          <div className='hidden w-full md:col-span-1  lg:flex lg:flex-col  lg:col-start-5  gap-4 justify-end text-right lg:mb-16 lg:justify-items-end items-end  '>
            <p className='text-2xl lg:leading-[45px] lg:col-span-2 lg:text-wrap md:text-[28px] lg:text-(length:--text-32) font-bold font-(family-name:--font-header) text-nowrap md:w-[286px]'>
              Crafting stories with every stitch
            </p>
            <p className='text-base font-medium md:text-lg md:w-[286px] '>
              Where every stitch tells a story, and every accessory unveils a
              new chapter of style.
            </p>
          </div>
          <p
            className='md:leading-[170px]
    md:col-span-full md:row-start-2 lg:row-start-3 text-[74px] leading-[90.2px] lg:leading-[246.4px] md:text-[154px]  lg:text-[224px] xl:text-[284px] xl:row-end-5  font-bold font-(family-name:--font-header) '>
            Bletzertt
          </p>
          <div
            className='flex flex-col gap-4 items-center text-center
    md:col-span-1 md:col-start-1 md:col-end-3 md:text-left md:items-start
    lg:col-span-2 lg:col-start-1 lg:col-end-4  xl:col-start-1 xl:col-end-3'>
            <p className='text-2xl lg:leading-[45px] lg:col-span-2 lg:text-wrap md:text-[28px] lg:text-(length:--text-32) font-bold font-(family-name:--font-header) text-nowrap lg:pr-20'>
              Special project by STYLEEST
            </p>
            <p className='max-md:mb-5 text-base font-medium xl:text-lg lg:text-lg md:w-[405px]'>
              This isn't just a collection, it's a manifestation of creativity,
              innovation, and a bold redefinition of contemporary style.
            </p>
          </div>

          <div className='md:col-span-2 md:col-end-5 mx-auto md:mx-0  md:mt-0 md:flex md:justify-end h-full md:items-end lg:col-start-4 lg:col-span-2'>
            <div className='w-fit h-14.75'>
              <Button>See Collection</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
