import React from 'react'
import Footer from "./footer";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <>

            <div className="error_div">

                <div className="error_text">
                    <p>Page not found</p>
                    <h2>Error 404</h2>
                    <p>Go Back to Home Page <Link to="/"><button>Home</button>   </Link> </p>

                </div>

            </div>

           
        </>
    )
}

export default Error