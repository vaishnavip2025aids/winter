
import React from "react";

const buttonStyles = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-input bg-background hover:bg-accent",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const Button = ({ variant = "default", className = "", children, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${buttonStyles[variant] || buttonStyles.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
