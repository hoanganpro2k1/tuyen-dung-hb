import React from 'react';
import { cn } from '@/lib/utils';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, className, children }) => {
  return (
    <NextLink
      href={href}
      className={cn(
        'inline-flex transform items-center justify-center rounded-[13px] bg-red-primary px-8 py-2 text-[15px] text-white shadow-lg transition-all duration-300 md:rounded-full md:text-lg',
        'hover:bg-gradient-to-r hover:from-gold-primary hover:to-red-primary hover:font-bold hover:text-white',
        className,
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
