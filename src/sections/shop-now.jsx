import React from "react";
import Button from "../components/button";

function ShopNow() {
  return (
    <div className='w-full h-fit relative overflow-hidden'>
      <div className='w-full max-md:w-200 h-88.25 md:h-112.25 lg:h-102.5 xl:h-145.25 '>
        <img
          className='w-full h-full object-cover object-center aspect-auto xl:object-fill'
          loading='lazy'
          decoding='async'
          src='/images/footer/footer.avif'
          alt='Shop Now Background'
        />
      </div>
      <div className='absolute z-1 top-0 text-center xl:py-29 py-15 md:py-20 w-full h-full px-(--mx-sm) md:px-(--mx-md) '>
        <div className='max-w-300 mx-auto'>
          <p className='xl:px-10 xl:text-7xl md:mb-8 md:text-[38px] font-(family-name:--font-header) text-[28px] font-bold mb-6'>
            Take the next step with our exclusive collections
          </p>
          <p className='md:mb-14 lg:text-lg font-medium mb-8'>
            Take the next step in your style journey and discover the allure of
            our meticulously crafted, exclusive collections.
          </p>
          <div className='w-40 mx-auto h-14.75'>
            <Button>Shop Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopNow;
