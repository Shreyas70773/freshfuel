import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Static/images/star_icon.png";
import star_dull_icon from "../Static/images/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);
return (
  <div className='productdisplay'>
    <div className="productdisplay-left">
      <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
      </div>
      <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
      </div>
    </div>
    <div className="productdisplay-right">
      <h1>{product.name}</h1>
      <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        
      </div>
      <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
      </div>
      <div className="productdisplay-right-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra et nibh et hendrerit.
      Proin vel magna blandit, convallis mauris nec, mollis arcu. Maecenas tincidunt at enim vel auctor.
      </div>
      <div className="productdisplay-right-size">
          <h1>Select Weight</h1>
          <div className="productdisplay-right-sizes">
              <div>100gms</div>
              <div>250gms</div>
              <div>500gms</div>
              <div>1kg</div>
              <div>3kg</div>
          </div>
      </div>
      <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      <p className='productdisplay-right-category'><span>Category:</span>TO BE ADDED</p>
      <p id= 'last-productdisplay-right-category' className='productdisplay-right-category'><span>Tags :</span>TO BE ADDED </p>
    </div>
  </div>
)
}

export default ProductDisplay

