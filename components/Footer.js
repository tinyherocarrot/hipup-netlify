import React from "react"

const Footer = () => {
  return (
    <div className="footer-container">
      <div>social links</div>
      <div>contact info</div>

      <style jsx>
        {`
          .footer-container {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  )
}

export default Footer
