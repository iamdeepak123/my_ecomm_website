import { Link } from "react-router-dom"
import "../index.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from "react";
import CartContext from "../Context/CartContext";
import LoginOutContext from "../Context/LogInOutContext";

function Navbar() {
    const [value, setValue] = useState(false)
    const { total_quantity } = useContext(CartContext);

    const {  LoggedOut, Userdata } = useContext(LoginOutContext);





    return (
        <>
            <div className={value ? "main_navbar_div active" : "main_navbar_div"}>
                <div className="nav_logo">
                    <i className="fa-brands fa-studiovinari"> </i>
                </div>
                <div className="nav_list">
                    <ul>
                        <li><Link onClick={() => setValue(false)} style={{ textDecoration: 'none' }} to="/" >HOME</Link></li>
                        <li><Link onClick={() => setValue(false)} style={{ textDecoration: 'none' }} to="/Products">PRODUCTS</Link></li>
                        <li><Link onClick={() => setValue(false)} style={{ textDecoration: 'none' }} to="/About">ABOUT</Link></li>
                        <li><Link onClick={() => setValue(false)} style={{ textDecoration: 'none' }} to="/Contact">CONTACT</Link></li>
                        <li><Link onClick={() => setValue(false)} style={{ textDecoration: 'none' }} to="/AddToCart"><ShoppingCartIcon /> <span>{total_quantity}</span></Link></li>
                        <li>
                            {Userdata.loggedin ?

                                <Link onClick={LoggedOut} to="/"><button>Logout</button></Link>
                            :
                            <Link onClick={() => setValue(false)} to="/Login"><button>Login</button></Link>
                            }
                        </li>
                    </ul>
                </div>
                {
                    Userdata.loggedin ? <div className="user_name"> <p>{Userdata.name}</p> <img src={Userdata.image} alt="" /> </div> : <div></div>
                }
                <div className="menu_btn">
                    < MenuIcon className="mobile_icon" onClick={() => setValue(true)} />
                    < CloseIcon className="close_icon mobile_icon" onClick={() => setValue(false)} />
                </div>
            </div>
        </>
    )
}

export default Navbar