import React from "react";
import Paragraph from "./Line";

const aboutUsDescription =
  "We believe that style is a powerful form of self-expression. Our journey began with a simple yet profound vision – to curate a diverse collection of fashion-forward pieces that empower individuals to embrace their uniqueness.";

function AboutUs() {
  return (
    <div className=' bg-(--color-bg-secondary)  w-full lg:h-400 h-fit  '>
      <div className='h-fit lg:h-400  w-full  block l bg-[--color-bg-secondary] relative  px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl)'>
        <div className='introdution  w-full relative  max-w-7xl mx-auto  lg:sticky top-0 bottom-0 z-1'>
          <h2 className='introdution-title'>(About us)</h2>
          <Paragraph value={aboutUsDescription} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
