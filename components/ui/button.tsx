import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type BaseProps = {
  className?: string;
  children: ReactNode;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button(props: ButtonProps | LinkProps) {
  const baseStyles = cn(
    'inline-flex min-h-14 items-center justify-center rounded-full px-8 py-4 text-base font-semibold tracking-tight transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef2ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1037]',
    'bg-[#fff7d6] text-[#1a1037] shadow-[0_12px_40px_rgba(255,247,214,0.22)] hover:-translate-y-0.5 hover:shadow-[0_16px_52px_rgba(255,247,214,0.28)]'
  );

  if ('href' in props) {
    const { href, className, children, ...rest } = props;

    return (
      <a href={href} className={cn(baseStyles, className)} {...rest}>
        {children}
      </a>
    );
  }

  const { className, children, ...rest } = props;

  return (
    <button className={cn(baseStyles, className)} {...rest}>
      {children}
    </button>
  );
}