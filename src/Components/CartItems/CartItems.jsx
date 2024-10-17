import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className='cartItems'>
        <div className="cartItems_format_main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if (cartItems[e.id]>0) 
            {
                return <div>
                            <div className="cartItems_format cartItems_format_main">
                                <img src={e.image} alt="" className='cartIcon_product_icon'/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartItems_quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartItems_removeIcon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}}  alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartItems_down">
            <div className="cartItems_total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartItems_total_item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartItems_total_item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems_total_item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems