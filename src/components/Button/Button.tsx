import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  color?: "blue" | "green" | "red";
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className,
  color = "blue",
}) => {
  const colorClasses = {
    blue: "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700",
    green:
      "from-green-400 to-green-600 hover:from-green-500 hover:to-green-700",
    red: "from-red-400 to-red-600 hover:from-red-500 hover:to-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2.5 bg-gradient-to-r ${colorClasses[color]} text-white font-semibold rounded-lg shadow-md transform transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
