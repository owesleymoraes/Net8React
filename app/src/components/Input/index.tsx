import { ChangeEventHandler } from "react";

interface InputProps {
  label: string;
  name: string;
  onChange: (value: ChangeEventHandler<HTMLInputElement>) => void;
}

export const Input = ({ label, name, onChange }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="inline-block mb-1" form={name}>
        {label}
      </label>
      <input
        className="border
           border-gray-400 
             w-full
             py-2
             px-1 
             rounded-md
           focus:border-gray-500 
             focus:outline-none"
        name="name"
        onChange={() => onChange}
      />
    </div>
  );
};
