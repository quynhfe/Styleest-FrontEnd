import React from "react";

function Button({ children, className = "" }) {
  return (
    <button
      className={`tracking-(--t-16) px-8 py-5 text-(length:--text-16) h-full w-full flex items-center justify-center text-black text-sm font-bold bg-white rounded-[200px]  ${className} `}>
      {children}
    </button>
  );
}

export default Button;
