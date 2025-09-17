import React from "react";

function Title({ children, className }) {
  return (
    <h1
      className={`mb-3 md:mb-4 lg:mb-6 tracking-[3.2px] text-center text-(--color-text-brown) font-bold text-base uppercase  ${className}`}>
      ({children})
    </h1>
  );
}

export default Title;
