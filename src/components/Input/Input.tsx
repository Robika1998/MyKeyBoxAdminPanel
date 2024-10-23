import React from "react";

type InputProps = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
    />
  );
};

export default Input;
