import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productDisplay'>
        <div className="productDisplay_left">
            <div className="productDisplay_img_list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplay_img">
                <img className='productDisplay_main_img' src={product.image} alt="" />
            </div>
        </div>

        <div className="productDisplay_right">
            <h1>{product.name}</h1>
            <div className="productDisplay_right_stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(155)</p>
            </div>
            <div className="productDisplay_right_prices">
                <div className="productdisplay_right_price_old">${product.old_price}</div>
                <div className="productdisplay_right_price_new">${product.new_price}</div>
            </div>
            <div className="productDisplay_right_description">
                A pullover shirt made from lightweight breathable fabric. Relaxed fit with a round
                neckline and short sleeves, perfect for the hot summer day.
            </div>
            <div className="productDisplay_right_size">
                <h1>Select size</h1>
                <div className="productDisplay_right_sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className="productDisplay_right_category"><span>Category: </span> Outerwear, Layering, Cold-weather</p>
            <p className="productDisplay_right_category"><span>Tags: </span> Hot Seller, Modern</p>
        </div>
    </div>
  )
}

export default ProductDisplay