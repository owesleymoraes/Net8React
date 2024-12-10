import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  typeButton?: "success" | "error";
}
export const Button = ({
  children,
  disabled,
  typeButton,
  onClick,
  ...props
}: ButtonProps) => {
  const baseClass = "py-1 px-2 ml-2 rounded-md text-white font-semibold";
  const disabledClassName = "bg-gray-400 hover:none cursor-none";
  const statusClass =
    typeButton === "success"
      ? "bg-blue-600 hover:bg-blue-500 "
      : "bg-red-600 hover:bg-red-500";
  const buttonClass = `${baseClass} ${statusClass}`;
  return (
    <button
      className={disabled ? `${baseClass} ${disabledClassName}` : buttonClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
