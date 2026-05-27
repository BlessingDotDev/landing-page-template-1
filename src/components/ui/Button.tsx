/*import { Bars3Icon } from "@heroicons/react/24/outline";

function Button() {
  return (
    <button className="bg-white/15 rounded-xl 
      py-2 px-4 cursor-pointer md:px-8 transition-all duration-300">
        
      <Bars3Icon className="text-white w-6 h-6 md:hidden" />
      <p className="hidden md:block font-semibold">
        Menu
      </p>
    </button>
  )
}

export default Button;
*/

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

/*


import React from "react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",

  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  outline:
    "border border-gray-300 text-gray-900 hover:bg-gray-100",

  ghost:
    "text-gray-900 hover:bg-gray-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "rounded-xl font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
*/