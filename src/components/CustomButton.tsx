import React from "react";
import { ICustomButton } from "../interfaces/global.interface";

const CustomButton: React.FC<ICustomButton> = ({
  onClick,
  disabled,
  text,
  className,
}) => {
  return (
    <button
      className={`w-32 h-9 bg-secondaryColorLight border border-secondaryColorLight font-playfairDisplay font-medium text-center text-sm text-textColorDarkGray ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
