import React from "react"

const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps}>
      {children}
      <style jsx>{`
        button {
          padding 0.6rem;
          background-color: white;
          border: 2px solid black;
          border-radius: 7px;
          font-size: 1rem;
          transition: transform 0.2s;
        }
        button:hover {
          cursor: pointer;
          text-decoration: underline;
          transform: scale(1.05)
        }
        button:active {
          outline: none;
        }
      `}</style>
    </button>
  )
}

export default Button
