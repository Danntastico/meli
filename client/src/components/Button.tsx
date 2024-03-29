import React from 'react';
import '/src/styles/components/button.scss';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, label, ...rest }) => {
  return (
    <button className='main-button' aria-label={label} {...rest}>{children}</button >
  )
}
