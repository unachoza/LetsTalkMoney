import React from 'react';
import './Button.styles.scss';

const CustomButton = ({ buttonSyle, children, ...props }) => {
 console.log(props.props)
 const style = props.props
 console.log(style)
  return (
    <div className="btn" {...props} style={{style}}>
      {children}
    </div>
  );
};

export default CustomButton;
