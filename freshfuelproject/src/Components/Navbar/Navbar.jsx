import React, { useState,useContext,useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cart_icon from '../Static/images/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';


export const Navbar = () => {
  const [menu, setMenu] = useState('store');
  const {getTotalCartItems}=useContext(ShopContext)

  const handleContactClick = () => {
    setMenu('contact');
    const footerElement = document.getElementById('my-footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    } 
  };
  const menuRef = useRef();
  return (
    <div className="navbar">
      <div className="logo">
        <p><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>FRESH FUEL</Link></p>
      </div>
      <ul className="navbar-links">
        <li onClick={() => { setMenu("store"); }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>STORE</Link>{menu === "store" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("shop"); }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/ShopCategory'>SHOP</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none',color:'black'}} to='/ShopCategory'>ABOUT</Link>{menu=="about"?<hr/>:<></>}</li>
        <li onClick={handleContactClick}><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>CONTACT</Link>{menu === "contact" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
      {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

