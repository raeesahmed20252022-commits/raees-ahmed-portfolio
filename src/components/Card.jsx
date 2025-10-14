import React from 'react';
import AppColors from '../constants/AppColors';

const Card = ({ 
  children, 
  className = '',
  padding = 'medium',
  shadow = 'medium',
  hover = true,
  ...props 
}) => {
  const baseStyles = 'rounded-2xl border border-border bg-background transition-all duration-500 relative overflow-hidden backdrop-blur-sm';
  
  const paddingStyles = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-10',
  };
  
  const shadowStyles = {
    none: '',
    small: 'shadow-lg',
    medium: 'shadow-xl',
    large: 'shadow-2xl',
  };
  
  const hoverStyles = hover ? 'hover:-translate-y-4 hover:shadow-3xl hover:scale-105 hover:rotate-1' : '';
  
  return (
    <div
      className={`${baseStyles} ${paddingStyles[padding]} ${shadowStyles[shadow]} ${hoverStyles} ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
