import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { cn } from '@/lib/cn';

type BaseProps = {
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type Props = ButtonAsButton | ButtonAsLink;

export function Button(props: Props) {
  const baseStyles = cn(
    'inline-flex min-h-14 items-center justify-center rounded-full px-8 py-4 text-base font-semibold tracking-tight transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef2ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1037]',
    'bg-[#fff7d6] text-[#1a1037] shadow-[0_12px_40px_rgba(255,247,214,0.22)] hover:-translate-y-0.5 hover:shadow-[0_16px_52px_rgba(255,247,214,0.28)]'
  );

  if (typeof props.href === 'string') {
    const { href, className, children, ...anchorProps } = props;

    return (
      <a href={href} className={cn(baseStyles, className)} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { className, children, ...buttonProps } = props;

  return (
    <button className={cn(baseStyles, className)} {...buttonProps}>
      {children}
    </button>
  );
}