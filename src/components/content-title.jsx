import React from "react";

function ContentTitle({ children, className }) {
  return (
    <h3
      className={`mb-4 md:mb-6 lg:text-[32px] text-(--color-text-dark) font-bold text-xl ${className}`}>
      {children}
    </h3>
  );
}

export default ContentTitle;
