import React from "react";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger"; // the ? means optional and thus we don't need to specific in the app.tsx file
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
