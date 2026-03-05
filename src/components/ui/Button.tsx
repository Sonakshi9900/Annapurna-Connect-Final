import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, asChild = false, children, ...props }, ref) => {

        const baseClasses = cn(
            "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
            {
                "bg-primary text-white hover:bg-primary-hover": variant === "primary",
                "bg-secondary text-white hover:bg-secondary-hover": variant === "secondary",
                "border border-border bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-foreground": variant === "outline",
                "hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground": variant === "ghost",
                "bg-red-500 text-white hover:bg-red-600": variant === "danger",
                "h-9 px-4 text-sm": size === "sm",
                "h-11 px-6 text-base": size === "md",
                "h-14 px-8 text-lg": size === "lg",
                "h-11 w-11": size === "icon",
            },
            className
        );

        const content = (
            <>
                {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : null}
                {children}
            </>
        );

        if (asChild) {
            return React.cloneElement(children as React.ReactElement, {
                className: cn(baseClasses, (children as React.ReactElement).props.className),
                ref: ref as React.ForwardedRef<HTMLButtonElement>,
                disabled: isLoading || props.disabled,
                ...props,
            }, content);
        }

        return (
            <button
                ref={ref}
                disabled={isLoading || props.disabled}
                className={baseClasses}
                {...props}
            >
                {content}
            </button>
        );
    }
);
Button.displayName = "Button";
