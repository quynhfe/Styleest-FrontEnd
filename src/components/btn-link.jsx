import React from "react";

function Link({ children, className = "" }) {
  return (
    <p
      className={`tracking-(--t-16) text-text-dark font-bold underline decoration-1 underline-offset-[5px] ${className} `}>
      {children}
    </p>
  );
}

export default Link;
