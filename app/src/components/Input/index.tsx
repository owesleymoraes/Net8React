import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="mb-1">
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
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
