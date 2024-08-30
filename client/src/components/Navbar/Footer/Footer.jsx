import React from 'react'
import './Footer.css'
import { assets } from '../../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
            <div className="footer-content-left">
                  <img src={assets.logo} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint nemo, qui sequi voluptates minima debitis repellat. Hic dolorum quae repellendus.</p>
            </div>
            <div className="footer-content-center"></div>
            <div className="footer-content-right"></div>
      </div>
    </div>
  )
}

export default Footer
