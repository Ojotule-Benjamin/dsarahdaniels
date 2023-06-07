import React from "react";
import { ICustomButton } from "../interfaces/global.interface";

const CustomButton: React.FC<ICustomButton> = ({
  onClick,
  disabled,
  text,
  className,
}) => {
  const buttonClassName = `w-32 h-9 bg-white font-playfairDisplay font-medium text-center text-sm text-[#7A7E83] ${className}`;

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default CustomButton;
