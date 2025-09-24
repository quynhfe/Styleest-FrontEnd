import React from "react";
import Title from "../components/title-default";
import TitlePrimary from "../components/title-primary";
("use client");
import { useScroll, motion } from "motion/react";
import { animate, scroll } from "motion";

const aboutUsDescription =
  "We believe that style is a powerful form of self-expression. Our journey began with a simple yet * profound vision – to curate a diverse collection of fashion-forward pieces that empower individuals * to embrace their uniqueness.";

function Content() {
  const lines = aboutUsDescription.split("*");

  return (
    <article>
      <TitlePrimary className={"paragraph md:text-start"}>
        {lines.map((line, index) => (
          <span
            key={index}
            className='line'>
            {line.trim()}
          </span>
        ))}
      </TitlePrimary>
    </article>
  );
}

function ScrollLinked() {
  const { scrollYProgress } = useScroll({
    target: document.querySelector(".paragraph"),
    offset: ["start end", "end start"],
  });

  React.useEffect(() => {
    const paragraph = document.querySelector(".paragraph");
    const lines = document.querySelectorAll(".line");

    if (!paragraph || lines.length === 0) return;

    scroll(
      animate(lines, {
        color: ["var(--color-text-dark)", "var(--color-text-dark-muted)"],
      }),
      { target: paragraph },
    );
  }, []);
  return (
    <>
      <motion.div
        style={{
          scaleY: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          // backgroundColor: "#ff0088",
        }}
      />
      <Content />
    </>
  );
}

function AboutUs() {
  return (
    // <motion.div className=' bg-bg-secondary  w-full lg:h-400 h-fit  '>
    //   <div className='h-fit lg:h-400  w-full  block l bg-bg-secondary relative  px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl)'>
    //     <div className='lg:sticky w-full  py-15 text-center flex flex-col  justify-center font-bold md:py-20 xl:py-30  relative  max-w-300 mx-auto  top-0 bottom-0 z-1'>
    //       <Title className='md:text-start mb-6 xl:mb-6.75'>About us</Title>
    //       <ScrollLinked />
    //     </div>
    //   </div>
    // </motion.div>
    // <motion.div className=' bg-bg-secondary  w-full lg:h-400 h-fit  '>
    <div className='h-fit lg:h-400  w-full  block l bg-bg-secondary relative  px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl)'>
      <div className='lg:sticky w-full  py-15 text-center flex flex-col  justify-center font-bold md:py-20 xl:py-30  relative  max-w-300 mx-auto  top-0 bottom-0 z-1'>
        <Title className='md:text-start mb-6 xl:mb-6.75'>About us</Title>
        <ScrollLinked />
      </div>
    </div>
    // </motion.div>
  );
}

export default AboutUs;
