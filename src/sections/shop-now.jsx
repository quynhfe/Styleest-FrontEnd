import React from "react";
import Button from "../components/button";

function ShopNow() {
  return (
    <div className="w-full h-full bg-[url('/images/footer/footer.avif')] bg-center bg-cover relative">
      <div className='text-center xl:py-29 py-15 md:py-20 w-full h-full px-(--mx-sm) md:px-(--mx-md) max-w-screen mx-auto'>
        <p className='xl:px-10 xl:text-7xl md:mb-8 md:text-[38px] font-(family-name:--font-header) text-[28px] font-bold mb-6'>
          Take the next step with our exclusive collections
        </p>
        <p className='md:mb-14 lg:text-lg font-medium mb-8'>
          Take the next step in your style journey and discover the allure of
          our meticulously crafted, exclusive collections.
        </p>
        <Button
          aStyle='flex justify-center '
          bStyle='w-40'>
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default ShopNow;
