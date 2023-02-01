import React, { ChangeEventHandler } from "react";

interface InputProps {
  type?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  onBlur?: ChangeEventHandler;
}

const Input = ({
  type,
  placeholder,
  label,
  onChange,
  onBlur,
  className,
}: InputProps) => {
  return (
    <div className={`input ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
