import React from "react";
import aboutData from "../data/about.json";
import Line from "./Line";
import Paragraph from "./Line";

const aboutUsDescription =
  "We believe that style is a powerful form of self-expression. Our journey began with a simple yet profound vision – to curate a diverse collection of fashion-forward pieces that empower individuals to embrace their uniqueness.";

function AboutUs() {
  return (
    <div className='about-us'>
      <div className='relative lg:h-400 h-fit'>
        <div className=' introdution lg:sticky relative top-0 bottom-0 z-1 bg-(--color-bg-secondary)'>
          <h2 className='introdution-title'>(About us)</h2>
          <Paragraph value={aboutUsDescription} />
        </div>
      </div>
      <div className='h-400 w-full hidden lg:block lg:top-0.75 bg-(--color-bg-secondary) absolute z-0'></div>
      <div className='md:absolute md:z-1 md:top-80 lg:top-380'>
        <div className='about-tayson'>
          <div className='img-taysonf md:row-start-3 md:mt-3.75 md:row-span-4 lg:row-start-2 lg:flex lg:justify-items-start'>
            <img
              src={aboutData[0].imageUrl}
              alt={aboutData[0].title}
            />
          </div>
          <div className='img-taysonb max-md:row-start-4 col-end-6 md:col-end-9 md:row-start-1 lg:col-start-7 lg:col-end-10 lg:flex lg:justify-end lg:mb-0 '>
            <img
              src={aboutData[1].imageUrl}
              alt={aboutData[1].title}
            />
          </div>
          <div className='tayson-des md:mt-17.5 lg:col-end-10 lg:ml-[68px] lg:row-start-4 lg:mt-7'>
            <h3>STYLEEST collaborates with TAYSON</h3>
            <p className='tayson-des-p'>
              The collection is comprised of hoodies, jerseys, shorts and
              accessories that feature the parisian club’s branding overlaid by
              CRASH’s vibrant aesthetic.
            </p>
            <p className='see-collection '>See Collection</p>
          </div>
        </div>

        <div className='about-tayson md:pt-10 lg:mt-25.75'>
          <div className='img-taysonf md:col-end-8 lg:col-end-10 lg:flex lg:justify-end'>
            <img
              src={aboutData[2].imageUrl}
              alt={aboutData[2].title}
            />
          </div>
          <div className='img-taysonb row-start-4 col-start-1 lg:row-start-3 lg:mt-16.25'>
            <img
              src={aboutData[3].imageUrl}
              alt={aboutData[3].title}
            />
          </div>
          <div className='tayson-des md:col-start-1 md:row-start-1 md:mt-5 lg:mt-14'>
            <h3>STYLEEST collaborates with COUTU</h3>
            <p className='tayson-des-p'>
              This exclusive partnership brings together two fashion
              powerhouses, combining Styleest's curated sophistication with
              Coutu's avant-garde designs.
            </p>
            <p className='see-collection'>See Collection</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
