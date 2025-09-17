import React from "react";

function Button({ children, bStyle, aStyle }) {
  return (
    <a className={`h-[59px]  overflow-hidden ${aStyle}`}>
      <button
        className={`px-8 py-5 text-(length:--text-md) h-full flex items-center justify-center text-black text-sm font-bold bg-white rounded-[200px]  ${bStyle} `}>
        {children}
      </button>
    </a>
  );
}

export default Button;
