import React from "react";
import logo from "../../assets/logo.png";

interface RegisterStudentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: () => void;
}

export const RegisterStudent: React.FC<RegisterStudentProps> = ({
  title,
  onClick,
  ...props
}) => {
  return (
    <div className="flex items-center mb-7 w-4/5 ml-auto mr-auto">
      <img src={logo} alt="logo_cadastro" className="w-14 h-14" />
      <button
        className="py-2 px-3 bg-lime-600 ml-4 rounded-md text-white font-semibold"
        onClick={onClick}
        {...props}
      >
        {title}
      </button>
    </div>
  );
};
