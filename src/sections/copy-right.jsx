import React from "react";
import Motion from "../components/motion";
function CopyRight() {
  return (
    <div className='lg:pt-9  bg-text-dark lg:pb-6.25 md:pt-11.75 md:pb-9 pt-6.75 pb-4 items-center text-sm'>
      <Motion className='px-(--mx-sm) md:px-(--mx-md) xl:px-(--mx-xl)'>
        <div className='max-w-300 mx-auto'>
          <div className=' lg:flex lg:justify-between text-center'>
            <p className='opacity-70'>
              Copyright© 2023. Agensip Creative Agency. All Right Reserved.
            </p>
            <div className='opacity-70 flex gap-8 justify-center mt-3 lg:m-0'>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  );
}

export default CopyRight;
