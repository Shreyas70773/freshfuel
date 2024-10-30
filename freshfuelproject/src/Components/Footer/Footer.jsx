import React from 'react'
import './Footer.css'
import instagram_icon from '../Static/images/instagram_icon.png'
import pintrest_icon from '../Static/images/pintrest_icon.png'
import whatsapp_icon from '../Static/images/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div id="my-footer" className='footer'>
    
    <ul className="footer-links">
     <li>Company</li>
     <li>Products</li>
     <li>Offices</li>
     <li>About</li>
     <li>Contact</li>
   </ul>
   <div className="footer-social-icons">
     <div className="footer-icons-container">
         <img src={instagram_icon} alt="" />
     </div>
     <div className="footer-icons-container">
         <img src={pintrest_icon} alt="" />
     </div>
     <div className="footer-icons-container">
         <img src={whatsapp_icon} alt="" />
     </div>
   </div>
   <div className="footer-copyright">
       <p>Copyright @ 2024 - All Right Reserved.</p>
     <hr /></div> 
       <p className="parent"></p>
       <h1 className="Final-Text">FRESHFUEL</h1>

 </div>

  )
}

export default Footer