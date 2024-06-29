import React, { useContext } from 'react'
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import  CartContext from '../Context/CartContext';

function Cart({ product }) {

  const { id, colors, stock, price } = product;
  const {getToCart} = useContext(CartContext);

  const [tick, setTick] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1)

  const Increment = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock)

  }
  const Decrement = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)

  }


  return (
    <>

      <div className='product_color'>
        <p>
          <b> Colors:</b>
          {
            colors.map((value, index) => {

              return <button key={index} style={{ backgroundColor: value }}
                className={tick === value ? "colors_btn active_1" : "colors_btn"} onClick={() => setTick(value)}>

                {tick === value ? <DoneIcon style={{ fontSize: "20px", marginLeft: "-4px", color: "white" }} /> : null}
              </button>
            })
          }
        </p>

      </div>
      <div className='cart_amount_btn'>
        <button onClick={Increment}>+</button>
        <p>{quantity}</p>
        <button onClick={Decrement}>-</button>
      </div>

      <div className='Add_cart_amount_btn'>
        <Link to="/AddToCart" onClick={() => {getToCart(id,tick,price, quantity, product)} }>
        
          <button>Add to Cart</button>

        </Link>
        
      </div>

    </>

  )
}

export default Cart