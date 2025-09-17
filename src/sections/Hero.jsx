import React from "react";
import Button from "../components/Button";
function Hero() {
  return (
    <div className='px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl)'>
      <div className='hero max-w-7xl mx-auto'>
        <div className='text-first  '>
          <p className='hero-title-primary md:w-[286px]'>
            Crafting stories with every stitch
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

        <div className='md:col-span-2 md:col-end-5 mx-auto md:mx-0 mt-[20px] md:mt-0 md:flex md:justify-end h-full md:items-end lg:col-start-4 lg:col-span-2'>
          <Button bStyle=' '>See Collection</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
