import React, { useEffect, useRef } from "react";
import Title from "../components/title-default";
import TitlePrimary from "../components/title-primary";
import { useScroll, useTransform } from "motion/react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import * as motion from "motion/react-client";
import Motion from "../components/motion";

const aboutUsDescription =
  "We believe that style is a powerful form of self-expression. Our journey began with a simple yet * profound vision – to curate a diverse collection of fashion-forward pieces that empower individuals * to embrace their uniqueness.";

function AboutUs() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "end start"],
  });

  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => {
  //     console.log(e);
  //   });
  // }, []);

  const lines = aboutUsDescription.split("*");

  const colorLine1 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.25, 1],
    getColors(isDesktop, [
      "var(--color-text-dark)",
      "var(--color-text-dark)",
      "var(--color-text-dark-muted)",
      "var(--color-text-dark-muted)",
    ]),
  );

  const colorLine2 = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.4, 1],
    getColors(isDesktop, [
      "var(--color-text-dark-muted)",
      "var(--color-text-dark)",
      "var(--color-text-dark)",
      "var(--color-text-dark-muted)",
    ]),
  );

  const colorLine3 = useTransform(
    scrollYProgress,
    [0.4, 1, 1, 1],
    getColors(isDesktop, [
      "var(--color-text-dark-muted)",
      "var(--color-text-dark)",
      "var(--color-text-dark)",
      "var(--color-text-dark)",
    ]),
  );

  function getColors(isDesktop, activeRange) {
    if (!isDesktop) {
      return Array(activeRange.length).fill("var(--color-text-dark)");
    }
    return activeRange;
  }
  return (
    <div
      ref={element}
      className='h-fit lg:h-500 lg:grid grid-rows-3  w-full block  bg-bg-secondary relative  px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl)'>
      <Motion
        variant='scale'
        className='lg:sticky w-full  py-15 text-center flex flex-col  justify-center font-bold md:py-20 xl:py-30  relative  max-w-300 mx-auto  top-0 bottom-0 z-1'>
        <Title className='md:text-start mb-6 xl:mb-6.75'>About us</Title>
        <TitlePrimary className='paragraph md:text-start'>
          <motion.span
            style={{ color: colorLine1 }}
            className='inline'>
            {lines[0].trim()}{" "}
          </motion.span>

          <motion.span
            style={{ color: colorLine2 }}
            className='inline'>
            {lines[1].trim()}{" "}
          </motion.span>

          <motion.span
            style={{ color: colorLine3 }}
            className='inline'>
            {lines[2].trim()}
          </motion.span>
        </TitlePrimary>
      </Motion>
    </div>
  );
}

export default AboutUs;
