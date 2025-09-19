import React from "react";

function Title({ children, className }) {
  return (
    <h1
      className={`tracking-(--t-3d2) mb-3 md:mb-4 lg:mb-6 text-center text-(--color-text-brown) font-bold text-base uppercase  ${className}`}>
      ({children})
    </h1>
  );
}

export default Title;
