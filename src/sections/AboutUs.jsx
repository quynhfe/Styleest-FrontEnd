import React from "react";
import Title from "../components/Title";
import TitlePrimary from "../components/TitlePrimary";

const aboutUsDescription =
  "We believe that style is a powerful form of self-expression. Our journey began with a simple yet profound vision – to curate a diverse collection of fashion-forward pieces that empower individuals to embrace their uniqueness.";

function AboutUs() {
  return (
    <div className=' bg-bg-secondary  w-full lg:h-400 h-fit  '>
      <div className='h-fit lg:h-400  w-full  block l bg-bg-secondary relative  px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl)'>
        <div className='lg:sticky w-full  py-15 text-center flex flex-col  justify-center font-bold md:py-20 xl:py-30  relative  max-w-7xl mx-auto  top-0 bottom-0 z-1'>
          <Title className='md:text-start mb-6 xl:mb-6.75'>About us</Title>
          <TitlePrimary className={"md:text-start"}>
            {aboutUsDescription}
          </TitlePrimary>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
