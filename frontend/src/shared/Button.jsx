import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-6 bg-transparent hover:bg-gray-50 border border-white/80 text-sm  text-white/80  hover:text-gray-50 duration-800 transition-all font-bold rounded-xl"
    >
      {text}
    </button>
  );
};

export default Button;
