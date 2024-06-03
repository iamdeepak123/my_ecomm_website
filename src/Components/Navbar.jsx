import { Link, Outlet } from "react-router-dom"
import "../index.css";

function Navbar() {

    return (
        <>




            <div className="main_navbar_div">
                <div className="nav_logo">
                    <i className="fa-brands fa-studiovinari"></i>
                </div>

                <div className="nav_list">
                    <ul>
                        <li><Link style={{ textDecoration: 'none' }} to="/">HOME</Link></li>
                        <li className="li_project"><Link style={{ textDecoration: 'none' }} to="/Projects">PROJECTS</Link></li>
                        <li><Link style={{ textDecoration: 'none' }} to="/About">ABOUT</Link></li>
                        <li><Link style={{ textDecoration: 'none' }} to="/Contact">CONTACT</Link></li>

                    </ul>
                </div>

                <div className="nav_login">

                    <Link to="/Login"><button>Login</button></Link>

                </div>


            </div>
         
            <Outlet />
        </>

    )
}

export default Navbar