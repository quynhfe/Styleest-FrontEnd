import React from 'react'

function Hero() {
  return (
    <section className='hero'>
      <div className='flex flex-col gap-4'>
        <div className='md:block hidden'>
          <p className='hero-title-primary'>Crafting stories with every stitch </p>
          <p className='hero-info'>Where every stitch tells a story, and every accessory unveils a new chapter of style.</p>
        </div>
        <h1 className='hero-title'>Bletzertt</h1>
        <div>
          <p className='hero-title-primary'>Special project by STYLEEST</p>
          <p className='hero-info'>This isn't just a collection, it's a manifestation of creativity, innovation, and a bold redefinition of contemporary style.</p>
        </div>

      </div>
      <a className="w-45 h-[59px]">
        <button className='btn-login h-full'>See Collection</button>
      </a>
    </section>
  )
}

export default Hero