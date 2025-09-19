import React from "react";

function TitlePrimary({ children, className }) {
  return (
    <h2
      className={`text-center font-bold xl:leading-[67.2px] md:text-[32px] xl:text-5xl  md:leading-[44.8px]  text-(--color-text-dark) font-(family-name:--font-header)  text-2xl leading-[33.6px] ${className}`}>
      {children}
    </h2>
  );
}

export default TitlePrimary;
