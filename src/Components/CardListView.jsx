import { Link } from 'react-router-dom';

const CardListView = (props) => {

    
   
    return (
        <div className="p_card_list">



            <div className="p_img_list">
                <Link to={`/SingleProduct/${props.id}`}>
                    <img src={props.img} alt="" />
                </Link >
            </div>

            <div className="basic_info_list">
                <p><b>  {props.name} </b></p>
                <p >{props.des.slice(0,150)}...</p>
                <p> &#8377;{props.price / 100}/-</p>
                <Link to={`/SingleProduct/${props.id}`}>
                    <button>Read More</button>
                </Link >
                
            </div>
        </div>
    )
}

export default CardListView