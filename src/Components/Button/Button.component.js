import React from 'react';
import './Button.styles.scss';

const CustomButton = ({ children, ...props }) => {
  return (
    <div className="btn" {...props}>
      {children}
    </div>
  );
};

export default CustomButton;
