import React from "react";

function ShopNow() {
  return (
    <div className='shop-now relative'>
      {/* <div className='shop-now-bg'>
        <img
          src='/images/footer/footer.jpg'
          alt='background'></img>
      </div> */}
      <div className='shop-now-content'>
        <p className='shop-title'>
          Take the next step with our exclusive collections
        </p>
        <p className='shop-des'>
          Take the next step in your style journey and discover the allure of
          our meticulously crafted, exclusive collections.
        </p>
        <a className='box-btn-see flex justify-center'>
          <button className='btn-login text-[16px] w-40 h-[59px] md:ml-1'>
            Shop Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default ShopNow;
