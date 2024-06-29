import React, { useContext } from 'react'
import CartCounter from "./CartCounter"
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../Context/CartContext';

const CartList = ({ name, id, tick, max, quantity, price, image, color }) => {

    const {removeItems} = useContext(CartContext)
    
    return (
        <>
            <div className='row_cartlist'>
                <div className='list_colomn_one'>
                    <div className='p_image'>
                        <img src={image} alt="" />
                    </div>
                    <div className="p_name">
                        <p style={{textTransform: "capitalize"}}>{name}</p>
                        <div><b>Color:</b><div className="color_div" style={{ backgroundColor: color }}>

                        </div> </div>

                    </div>

                </div>

                <div className='list_colomn_two'>
                    <p> &#8377;{price}</p>
                </div>
                <div className='list_colomn_three'>
                    <CartCounter quantity={quantity} max={max} id ={id} />

                </div>
                <div className='list_colomn_four'>
                    <p> &#8377;{price * quantity}</p>
                </div>
                <div className='list_colomn_five'>
                    <DeleteIcon style={{cursor: "pointer"}} onClick ={() => removeItems(id)} />
                </div>



            </div>

        </>
    )
}

export default CartList