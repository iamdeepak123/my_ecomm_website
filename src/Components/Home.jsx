import Footer from "./footer"
import animation from "../images/animated.jpg"

function Home() {

    return (
        <>
            {/* <h1>Hello I am Home</h1> */}

            <div className="main_home_div">
                <div className="home_content">
                    <h2>Let's Do it Together</h2>
                    <h3>Explore and Learn</h3>
                    <div className="home_btn">
                        <button>Get Started with me</button>
                    </div>
                    <div className="home_animated"> <img src={animation}alt="" /></div>
                   

                </div>
                {/* <footer>

                    <div className="footer_div">
                 
                        <input type="email" placeholder="Enter Your Email.." />
                        <button>Submit</button>
                    </div>

                </footer> */}

                <Footer />
            </div>


        </>

    )
}

export default Home