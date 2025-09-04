import React from "react";

function Hero() {
  return (
    <div className='hero lg:absolute lg:z-1'>
      <div className='text-first  '>
        <p className='hero-title-primary md:w-[286px]'>
          Crafting stories with every stitch{" "}
        </p>
        <p className='hero-info md:text-lg md:w-[286px]'>
          Where every stitch tells a story, and every accessory unveils a new
          chapter of style.
        </p>
      </div>
      <h1 className='hero-title'>Bletzertt</h1>
      <div className='text-second'>
        <p className='hero-title-primary lg:pr-20'>
          Special project by STYLEEST
        </p>
        <p className='hero-info lg:text-lg md:w-[405px]'>
          This isn't just a collection, it's a manifestation of creativity,
          innovation, and a bold redefinition of contemporary style.
        </p>
      </div>

      <a className='box-btn-see'>
        <button className='btn-login text-[16px] w-45 h-[59px] md:ml-1'>
          See Collection
        </button>
      </a>
    </div>
  );
}

export default Hero;
