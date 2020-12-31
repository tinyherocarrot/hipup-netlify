import React from 'react';

const Button = ({ children, ...otherProps }) => (
  <a {...otherProps}>
    {children}
    <style jsx>
      {`
        a {
          position: relative;
          display: inline-block;
          text-align: center;
          padding 0.6rem;
          background-color: white;
          border: 2px solid black;
          font-size: 1rem;
          transition: transform 0.2s;
        }
        a:hover {
          cursor: pointer;
          transform: scale(1.03)
        }
        a:focus {
          outline: none;
        }
      `}
    </style>
  </a>
);

export default Button;
