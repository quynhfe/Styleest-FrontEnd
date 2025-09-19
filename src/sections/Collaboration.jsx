import React from "react";
import aboutData from "../data/about.json";
import Link from "../components/btn-link";
import ContentTitle from "../components/content-title";
import ContentDescription from "../components/content-des";

function Collaboration() {
  return (
    <div className='px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl)'>
      <div className='flex flex-col max-w-screen mx-auto'>
        <div className='max-md:py-15 w-full max-md:gap-y-16.75 md:gap-x-21.75 lg:gap-x-16 xl:gap-x-[126px] lg:pt-0 md:pb-0 grid grid-flow-row-dense md:grid-rows-none md:grid-flow-col-dense relative md:mt-35 lg:mt-25'>
          <div className='img-taysonf lg:flex lg:justify-items-start'>
            <img
              src={aboutData[0].imageUrl}
              alt={aboutData[0].title}
            />
          </div>
          <div className='md:top-[-200px] lg:top-[-170px] right-0 img-taysonb md:row-start-1 lg:flex lg:justify-end lg:mb-0'>
            <img
              src={aboutData[1].imageUrl}
              alt={aboutData[1].title}
            />
          </div>
          <div className='tayson-des md:mt-[17px] lg:mt-[134px] xl:mt-[334px]'>
            <ContentTitle>STYLEEST collaborates with TAYSON</ContentTitle>
            <ContentDescription>
              The collection is comprised of hoodies, jerseys, shorts and
              accessories that feature the parisian club’s branding overlaid by
              CRASH’s vibrant aesthetic.
            </ContentDescription>
            <Link>See Collection</Link>
          </div>
        </div>

        <div className='max-md:py-15 w-full max-md:gap-y-16.75 md:gap-x-21.75 lg:gap-x-16 xl:gap-x-[126px] lg:pt-0 md:pb-0 grid grid-flow-row-dense md:grid-rows-none md:grid-flow-col-dense relative md:mt-40 md:mb-9.5 lg:mt-45 xl:mt-[208px]'>
          <div className='img-taysonf md:col-start-2 lg:flex lg:justify-end'>
            <img
              src={aboutData[2].imageUrl}
              alt={aboutData[2].title}
            />
          </div>
          <div className='img-taysonb md:top-70 lg:top-95 xl:top-120 left-0 row-start-4 col-start-1'>
            <img
              src={aboutData[3].imageUrl}
              alt={aboutData[3].title}
            />
          </div>
          <div className='tayson-des md:col-start-1 md:row-start-1 md:mt-5 lg:mt-14 xl:mt-[56px]'>
            <ContentTitle>STYLEEST collaborates with COUTU</ContentTitle>
            <ContentDescription>
              This exclusive partnership brings together two fashion
              powerhouses, combining Styleest's curated sophistication with
              Coutu's avant-garde designs.
            </ContentDescription>
            <Link>See Collection</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaboration;
