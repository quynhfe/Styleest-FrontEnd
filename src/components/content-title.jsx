import React from "react";

function ContentTitle({ children, className }) {
  return (
    <h3
      className={`font-(family-name:--font-header) mb-4 md:mb-6 lg:text-(length:--text-32) text-text-dark font-bold text-xl ${className}`}>
      {children}
    </h3>
  );
}

export default ContentTitle;
