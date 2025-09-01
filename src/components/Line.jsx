import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

function Paragraph({ value }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  const paragraphs = value.split("\n").filter((p) => p.trim() !== "");
  console.log(paragraphs);

  const totalPairs = Math.ceil(paragraphs.length / 2);

  return (
    <p
      className='about-des'
      ref={element}
      style={{ opacity: scrollYProgress }}>
      {paragraphs.map((paragraph, i) => {
        const pairIndex = Math.floor(i / 2);
        const start = pairIndex / totalPairs;
        const end = (pairIndex + 1) / totalPairs;
        return (
          <Line
            key={i}
            scrollYProgress={scrollYProgress}
            start={start}
            end={end}>
            {paragraph}
          </Line>
        );
      })}
    </p>
  );
}

const Line = ({ children, scrollYProgress, start, end }) => {
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["var(--color-text-dark)", "var(--color-text-dark-primary)"],
  );

  return (
    <>
      <span className='block lg:hidden '>{children}</span>
      <motion.span
        className='hidden lg:block '
        style={{ color }}>
        {children}
      </motion.span>
    </>
  );
};

export default Paragraph;
