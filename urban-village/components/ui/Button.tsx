"use client";

import { forwardRef } from "react";

type ButtonVariant = "outline" | "solid" | "text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "outline", as = "button", href, children, className = "", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-sans text-[13px] tracking-[0.12em] transition-all duration-350 ease-out focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-3";

    const variants: Record<ButtonVariant, string> = {
      outline:
        "border border-cream text-cream px-8 py-3.5 overflow-hidden relative group",
      solid:
        "bg-terracotta text-cream px-12 py-[18px] rounded-[2px] hover:bg-[#A3551F] border-radius-[2px]",
      text: "text-cream opacity-80 hover:opacity-100",
    };

    const cls = `${base} ${variants[variant]} ${className}`;

    if (as === "a") {
      return (
        <a href={href} className={cls} data-cursor="hover" {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {variant === "outline" && (
            <span className="absolute inset-0 bg-terracotta translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-350 ease-out z-0" />
          )}
          <span className="relative z-10">{children}</span>
        </a>
      );
    }

    return (
      <button ref={ref} className={cls} data-cursor="hover" {...props}>
        {variant === "outline" && (
          <span className="absolute inset-0 bg-terracotta translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-350 ease-out z-0" />
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
