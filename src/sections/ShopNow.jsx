import React from "react";
import Button from "../components/Button";

function ShopNow() {
  return (
    <div className='shop-now relative'>
      <div className='shop-now-content max-w-7xl mx-auto'>
        <p className='shop-title'>
          Take the next step with our exclusive collections
        </p>
        <p className='shop-des'>
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
