import React from 'react'

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={` w-full max-w-[90rem] px-4 sm:px-6 md:px-8 lg:px-12  mx-auto  ${className} `}
    >
      {children}
    </div>
  );
};

export default Container;
