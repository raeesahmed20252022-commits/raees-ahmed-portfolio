import React from 'react';
import AppColors from '../constants/AppColors';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden';
  
  const variants = {
    primary: 'bg-primary text-white hover:-translate-y-1 hover:shadow-xl focus:ring-blue-500 animate-shimmer',
    secondary: 'bg-secondary text-white hover:-translate-y-1 hover:shadow-xl focus:ring-slate-500',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-xl focus:ring-blue-500',
    ghost: 'text-primary hover:bg-blue-50 hover:-translate-y-1 focus:ring-blue-500',
  };
  
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:transform-none' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
