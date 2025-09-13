import React from "react";
import Paragraph from "./Line";

const aboutUsDescription =
  "We believe that style is a powerful form of self-expression. Our journey began with a simple yet profound vision – to curate a diverse collection of fashion-forward pieces that empower individuals to embrace their uniqueness.";

function AboutUs() {
  return (
    <div className='relative lg:h-400 h-fit'>
      <div className='introdution lg:sticky relative top-0 bottom-0 z-1'>
        <h2 className='introdution-title'>(About us)</h2>
        <Paragraph value={aboutUsDescription} />
      </div>
      <div className='h-400 w-full hidden lg:block lg:top-0.75 bg-[--color-bg-secondary] absolute z-0'></div>
    </div>
  );
}

export default AboutUs;
