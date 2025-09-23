function Button({ children, className = "", animation = true, isBig = true }) {
  return (
    <button
      className={`group/button overflow-hidden  px-8 py-5 text-(length:--text-16) h-full w-full flex items-center justify-center text-black text-sm font-bold bg-white rounded-[200px] ${className}`}>
      <div
        className={`${
          isBig ? "h-60 tracking-(--t-16)" : "h-50 tracking-(--t-14)"
        }`}>
        <div
          className={`flex flex-col transform transition duration-300 ease-in-out ${
            isBig
              ? `gap-5 translate-y-27.5 ${
                  animation ? "group-hover/button:translate-y-16.5" : ""
                }`
              : `gap-4 translate-y-22.5 ${
                  animation ? "group-hover/button:translate-y-13.5" : ""
                }`
          }`}>
          <p>{children}</p>
          <p>{children}</p>
        </div>
      </div>
    </button>
  );
}

export default Button;
