import React from 'react';
import { Button } from 'reakit';

const MyButton = ({ children, ...otherProps }) => (
  <Button className="styled-button" {...otherProps}>
    {children}
    <style jsx>
      {`
        styled-button {
          font-family: inherit;
          background-color: rgba(113, 165, 214, 1) 100%;
          position: relative;
          display: inline-block;
          text-align: center;
          padding 0.6rem;
          background-color: white;
          border: 2px solid black;
          font-size: 1rem;
          transition: transform 0.2s;
        }
        styled-button:hover {
          cursor: pointer;
          transform: scale(1.03)
        }
        styled-button:focus {
          outline: none;
        }
      `}
    </style>
  </Button>
);

export default MyButton;
