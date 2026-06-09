import React from "react";
import clsx from "clsx";

type ButtonVariant = 
  | 'primaryHeader'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant,
  size?: ButtonSize,
}

const variantStyles: Record<ButtonVariant, string> = {
  primaryHeader: "bg-white/15 rounded-xl hover:bg-white/20",
  primary: "text-white leading-normal bg-green-600  hover:ring-1 hover:bg-black ring-green-600",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  tertiary: "text-gray-900 hover:bg-gray-800 text-white",
  outline: "leading-normal hover:bg-green-600 ring-1 bg-black ring-green-600",
}

const sizeStyles: Record<ButtonSize, string> = {
  xs: "text-[12px] px-2 py-1 rounded-md",
  sm: "text-sm py-2 px-4 rounded-lg",
  md: "text-sm py-2 px-8 rounded-lg ",
  lg: "text-base"
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button 
      className={clsx(
        variantStyles[variant], sizeStyles[size], className, 
        "transition-all duration-200 cursor-pointer",
      )} 
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;