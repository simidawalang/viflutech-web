import React, { ChangeEventHandler } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  onBlur?: ChangeEventHandler;
}

const Input = ({ type, placeholder, onChange, onBlur }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
