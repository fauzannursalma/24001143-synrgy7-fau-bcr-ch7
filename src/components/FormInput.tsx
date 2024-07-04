import React from "react";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-sm text-start font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 border border-neutral-02 rounded-md shadow-sm placeholder-neutral-03 focus:outline-none focus:ring-darkblue focus:border-darkblue sm:text-sm"
      />
    </div>
  );
};

export default FormInput;
