import React,{useEffect,useState} from 'react'
import './Featured.css'

import Item from '../Item/Item'

export const Featured = () => {

  const [featuredProducts,setFeaturedProducts]=useState([]);
  useEffect(()=>{
fetch('http://localhost:4000/featured')
.then((response)=>response.json())
.then((data)=>setFeaturedProducts(data))
  },[])
  return (
    <div className='featured'>
      <h1>Featured Items</h1>
      <hr />
      <div className="featured-items">
        {featuredProducts.map((item,i)=>{
            return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Featured
