import React from "react"

const Button = ({ children, ...otherProps }) => {
  return (
    <a {...otherProps}>
      {children}
      <style jsx>{`
        a {
          position: relative;
          display: inline-block;
          text-align: center;
          padding 0.6rem;
          background-color: white;
          border: 2px solid black;
          border-radius: 7px;
          font-size: 1rem;
          transition: transform 0.2s;
        }
        a:hover {
          cursor: pointer;
          text-decoration: underline;
          transform: scale(1.05)
        }
        a:focus {
          outline: none;
        }
      `}</style>
    </a>
  )
}

export default Button
