interface ButtonProps {
  children: String;
  onClick: () => void;
  typeButton: "success" | "error";
}
export const Button = ({ children, typeButton, onClick }: ButtonProps) => {
  const baseClass = "py-1 px-2 ml-2 rounded-md text-white font-semibold";
  const statusClass =
    typeButton === "success"
      ? "bg-blue-600 hover:bg-blue-500 "
      : "bg-red-600 hover:bg-red-500";
  const buttonClass = `${baseClass} ${statusClass}`;
  return (
    <>
      <button className={buttonClass} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
