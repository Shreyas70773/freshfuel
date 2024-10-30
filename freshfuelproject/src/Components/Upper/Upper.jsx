
import React from 'react'
import { Link } from 'react-router-dom';
import './Upper.css'
import homebg from '../Static/images/homebg.png'
export const Upper = () => {
  return (
    <div className='top-container'>
        <div class="main-text-div">
            <h1 class="main-text">FRESH FUEL</h1>
            <Link to='/ShopCategory'><button class="explore-btn">EXPLORE</button></Link>
        </div>
         <img class="home-bg" src={ homebg } alt=""></img>
    </div>
  )
}

