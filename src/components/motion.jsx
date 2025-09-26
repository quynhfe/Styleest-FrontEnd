import React from "react";
import * as motion from "motion/react-client";
import { scale } from "motion";

const Motion = ({
  children,
  variant = "bottom",
  className,
  trigger = "view",
  delay = 0.5,
  duration = 1,
}) => {
  const variants = {
    top: { y: -50, opacity: 0 },
    bottom: { y: 50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1, scale: 1 },
    scale: { scale: 0.8, opacity: 0, y: 50 },
  };

  const motionProps =
    trigger === "view"
      ? {
          initial: variants[variant],
          whileInView: variants.visible,
          viewport: { once: true },
        }
      : {
          initial: variants[variant],
          animate: variants.visible,
        };

  return (
    <motion.div
      {...motionProps}
      transition={{ duration, delay }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default Motion;
