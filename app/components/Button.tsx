import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href, children, className, variant = 'primary', onClick }) => {
  const baseClasses = 'px-4 py-2 text-center rounded-md transition duration-300 font-semibold ';
  const variantClasses = variant === 'primary' ? 'bg-white text-black text-xl md:text-2xl shadow-[0_0_10px_rgba(51,51,51,1)] hover:shadow-[0_0_20px_rgba(51,51,51,1)] hover:bg-red hover:text-white' : 'bg-red text-white text-xl md:text-2xl shadow-[0_0_10px_rgba(192,10,50,1)] hover:shadow-[0_0_20px_rgba(192,10,50,1)] hover:bg-white hover:text-black';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
