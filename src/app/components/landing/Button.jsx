import React from 'react';

const Button = ({ children, variant }) => {
  const baseClasses = "gap-2.5 self-stretch px-6 py-4 rounded-xl max-md:px-5";
  const variantClasses = {
    primary: "text-white bg-cyan-700",
    secondary: "text-black bg-white",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;