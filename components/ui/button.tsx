import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isPlaceholder?: boolean;
};

export function Button({
  className,
  children,
  isPlaceholder = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex min-h-14 items-center justify-center rounded-full px-8 py-4 text-base font-semibold tracking-tight transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef2ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1037] disabled:cursor-not-allowed disabled:opacity-90',
        'bg-[#fff7d6] text-[#1a1037] shadow-[0_12px_40px_rgba(255,247,214,0.22)] hover:-translate-y-0.5 hover:shadow-[0_16px_52px_rgba(255,247,214,0.28)]',
        className,
      )}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
