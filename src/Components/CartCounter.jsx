import React from 'react'
import { useContext } from 'react';
import CartContext from '../Context/CartContext';


const CartCounter = ({quantity,max,id}) => {

const {Decrement, Increment} = useContext(CartContext)
  


   

  return (
<>
<div className='cart_amount_btn'>
        <button onClick={ ()=> Increment(id)}>+</button>
        <p>{quantity}</p>
        <button onClick={ ()=> Decrement(id)}>-</button>
      </div>
</>  )
}

export default CartCounter