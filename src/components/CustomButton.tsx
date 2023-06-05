import React from "react";
import { ICustomButton } from "../interfaces/global.interface";

const CustomButton: React.FC<ICustomButton> = ({ onClick, disabled, text }) => {
  return (
    <button
      className="custom-button w-32 h-9 bg-white font-playfairDisplay font-medium text-center text-xs"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
