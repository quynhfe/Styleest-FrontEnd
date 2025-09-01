// import React, { useEffect, useRef } from "react";
// import { useScroll, motion } from "framer-motion";

// function Paragraph({ value }) {
//   const element = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: element,
//     // container:
//     offset: ["start end", "start start"],
//   });

//   useEffect(() => {
//     return scrollYProgress.on("change", (e) => console.log(e));
//   }, [scrollYProgress]);
//   return (
//     <motion.p
//       className='about-des'
//       ref={element}
//       style={{ opacity: scrollYProgress }}>
//       {value}
//     </motion.p>
//   );
// }

// export default Paragraph;
