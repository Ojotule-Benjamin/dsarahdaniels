import React from "react";
import { ICustomInputProps } from "../interfaces/global.interface";

const CustomInput: React.FC<ICustomInputProps> = ({
  type,
  label,
  name,
  value,
  onChange,
  placeholder,
  className,
}) => {
  const inputClassName = `w-full h-14 rounded-sm outline-none p-5 placeholder:font-playfairDisplay font-normal text-sm text-[#717073]  ${className}`;
  return (
    <div className="w-full flex flex-col">
      <label className=" font-playfairDisplay font-normal text-xs text-[#717073] pb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        //value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClassName}
      />
    </div>
  );
};

export default CustomInput;
