import React from "react";

function ContentDescription({ children, className }) {
  return (
    <p
      className={`mb-6  lg:text-lg text-(--color-text-dark-primary) font-medium leading-[25.6px] ${className}`}>
      {children}
    </p>
  );
}

export default ContentDescription;
