import React, { MouseEventHandler } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string | undefined;
  content: any;
  onClick?: MouseEventHandler;
  variant: string;
}

const Button = ({
  type,
  className,
  variant,
  content,
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} className={`${className} ${variant}`} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
