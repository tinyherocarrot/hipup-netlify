import React from "react"

const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps}>
      {children}
      <style jsx>{`
        button {
          padding 0.6rem;
          border-radius: 0.5rem;
          background-color: white;
          border: 2px solid black;
        }
        button:hover {
          cursor: pointer;
          opacity: 0.6;
        }
      `}</style>
    </button>
  )
}

export default Button
