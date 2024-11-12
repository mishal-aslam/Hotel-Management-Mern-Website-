// AnchorButton.js
import React from "react";

const Button2 = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-6 bg-red-600 hover:bg-red-700 text-sm text-white/80 hover:text-gray-50 font-bold rounded-xl transition duration-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button2;
