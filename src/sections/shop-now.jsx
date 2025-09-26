import React from "react";
import Button from "../components/button";
import Motion from "../components/motion";

function ShopNow() {
  return (
    <div className='w-ful h-auto bg-[url("/images/footer/footer.avif")] bg-[length:100%_100%] relative overflow-hidden'>
      <div className='text-center xl:py-29 py-15 md:py-20 px-(--mx-sm) md:px-(--mx-md)'>
        <div className='max-w-300 mx-auto'>
          <Motion>
            <p className='xl:px-10 xl:text-7xl md:mb-8 md:text-[38px] font-(family-name:--font-header) text-[28px] font-bold mb-6'>
              Take the next step with our exclusive collections
            </p>
            <p className='md:mb-14 lg:text-lg font-medium mb-8'>
              Take the next step in your style journey and discover the allure
              of our meticulously crafted, exclusive collections.
            </p>
          </Motion>
          <Motion
            variant='right'
            className='w-40 mx-auto h-14.75'>
            <Button>Shop Now</Button>
          </Motion>
        </div>
      </div>
    </div>
  );
}

export default ShopNow;
