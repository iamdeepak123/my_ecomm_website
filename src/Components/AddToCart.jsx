import React, { useContext } from 'react'
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom"
import LoginOutContext from "../Context/LogInOutContext";

import CartList from './CartList';
const AddToCart = () => {

  const { cart, clearCart, total_quantity, total_price } = useContext(CartContext)
  const { Userdata } = useContext(LoginOutContext);
  if (cart.length === 0) {
    return (
      <div className="main_cart_page">

        <div className="heading_blank">
          <p>No Item in The Cart List</p>
        </div>
        <div className="continue_btn_blank">
          <Link to="/products"><button >Continue shopping</button></Link>
        </div>

      </div>
    )

  }

  return (
    <>
      <div className="main_cart_page">

        {Userdata.loggedin ?
          <div className="heading">

            <div className='heading_col_one'>
              <p>Your Cart List</p>
            </div>

            <div className='heading_col_two'>
              <p>{Userdata.name}</p>
              <img src={Userdata.image} alt="" />
            </div>
          </div>
          :
          <div className="heading">
            <p>Your Cart List</p>
          </div>
        }

        <div className="row_heading">
          <p>Item</p>
          <p>Price</p>
          <p className='colomn_three'>Quantity</p>
          <p className='colomn_four'>Subtotal</p>
          <p>Remove</p>
        </div>

        <div className="addcart_item_list">
          {cart.map((curElem) => {

            return <CartList key={curElem.id}  {...curElem} />

          })}

        </div>
        <div className="cart_btns">
          <div >
            <Link to="/products"><button className="continue_btn">Continue shopping</button></Link>
          </div>
          <div >
            <button onClick={clearCart} className="clear_cart_btn">Clear Cart Items</button>
          </div>
        </div>
        <div className="billing_section">
          <div className="billing_details">

            <div className='bill_colomn'>
              <p><b>Subtotal:</b></p>
              <p>&#8377;{total_price}/-</p>
            </div>

            <div className="bill_colomn">
              <p><b>Total Items: </b></p>
              <p>{total_quantity}</p>
            </div>

            <div className="bill_colomn">
              <p><b>Shipping Charge:</b></p>
              <p>&#8377;2000/-</p>
            </div>
            <hr />

            <div className="bill_colomn">
              <p><b>Order Total:</b></p>
              <p>  &#8377;{total_price + 2000}/-</p>
            </div>

          </div>

        </div>

        <div className="checkoutbtn">
          <button>Check Out</button>
        </div>

      </div>




    </>
  )
}

export default AddToCart