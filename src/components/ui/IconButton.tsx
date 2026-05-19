import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  label?: string;
};

function IconButton({ icon, label, className = "", ...props }: Props) {
  return (
    <button className={`icon-btn ${className}`} {...props}>
      {icon}
      {label ? <span>{label}</span> : null}
    </button>
  );
}

export default IconButton;