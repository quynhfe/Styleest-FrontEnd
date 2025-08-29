import React from 'react'

function Hero() {
  return (
    <section className='hero'>
      <div className='text-first '>
        <p className='hero-title-primary lg:text-wrap'>Crafting stories with every stitch </p>
        <p className='hero-info lg:text-lg'>Where every stitch tells a story, and every accessory unveils a new chapter of style.</p>
      </div>
      <h1 className='hero-title'>Bletzertt</h1>
      <div className='text-second'>
        <p className='hero-title-primary'>Special project by STYLEEST</p>
        <p className='hero-info'>This isn't just a collection, it's a manifestation of creativity, innovation, and a bold redefinition of contemporary style.</p>
      </div>

      <a className="box-btn-see">
        <button className='btn-login h-full md:ml-1'>See Collection</button>
      </a>
    </section>
  )
}

export default Hero