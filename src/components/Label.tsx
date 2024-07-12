import React, { FC, ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
  htmlFor: string;
  className?: string;
}

const Label: FC<LabelProps> = ({ children, htmlFor, className = '' }) => {
  return (
    <label htmlFor={htmlFor} className={`self-end font-outfit font-regular md:text-xl ${className}`}>
      {children}
    </label>
  );
};

export default Label;
