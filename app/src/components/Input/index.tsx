import { ChangeEvent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({ label, onChange, ...props }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="inline-block mb-1">{label}</label>
      <input
        className="border
           border-gray-400 
             w-full
             py-2
             px-1 
             rounded-md
           focus:border-gray-500 
             focus:outline-none"
        {...props}
        onChange={onChange}
      />
    </div>
  );
};
