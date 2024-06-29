import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <>


            <div className="p_card">
                <Link to={`/SingleProduct/${props.id}`}>
                    <div className="p_img">
                        <p>{props.cat}</p>
                        <img src={props.img} alt="" />
                    </div>

                    <div className="basic_info">
                        <p>{props.name}</p>
                        <p> &#8377;{props.price / 100}/-</p>
                    </div>
                </Link >
            </div>




        </>
    )
}

export default Card