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
      "inline-flex items-center justify-center font-sans text-[13px] tracking-[0.12em] transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-3";

    const variants: Record<ButtonVariant, string> = {
      // Text only — cream at rest, terracotta on hover. No box.
      outline: "text-cream hover:text-terracotta px-1 py-0.5",
      // Solid fill kept for primary actions like "Call to Reserve"
      solid:
        "bg-terracotta text-cream px-12 py-[18px] rounded-[2px] hover:bg-[#A3551F]",
      text: "text-cream hover:text-terracotta",
    };

    const cls = `${base} ${variants[variant]} ${className}`;

    if (as === "a") {
      return (
        <a href={href} className={cls} data-cursor="hover" {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={cls} data-cursor="hover" {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
