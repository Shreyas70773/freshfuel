import React from 'react'
import './Sidebar.css'
import add_product_icon from '../../assets/images/cart-svgrepo-com.svg'
import list_product_icon from '../../assets/images/list-products.svg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img className ="cart-icon " src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img className ="cart-icon " src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
      
    </div>
  )
}

export default Sidebar
