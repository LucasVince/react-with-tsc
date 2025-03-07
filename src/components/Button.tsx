import { FunctionComponent, ReactNode } from "react";

interface ButtonProps {
    theme: "light" | "dark",
    onClick: () => void,
    children: ReactNode
};

const Button: FunctionComponent<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="bg-slate-950 text-white p-2 rounded-md w-10" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;