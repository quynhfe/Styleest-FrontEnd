import React from "react";

function CopyRight() {
  return (
    <div className='lg:pt-9  bg-text-dark lg:pb-6.25 md:pt-11.75 md:pb-9 pt-6.75 pb-4 items-center  border-t-1 border-[#474747] text-sm'>
      <div className='px-(--mx-sm) md:px-(--mx-md) xl:px-(--mx-xl)'>
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
      </div>
    </div>
  );
}

export default CopyRight;
