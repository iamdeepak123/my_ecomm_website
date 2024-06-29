import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {  useState } from 'react';
import { Link } from 'react-router-dom';





function Login() {

    const [user, setUser] = useState("")
    // const [user2, setUser2] = useState("")
    // const [login, setLogin] = useState("Login")
    const [name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [loggedin, setLoggedin] = useState(false)
    
  
    function logintosite() {
        // console.log(user + Password);
        if (user === "" && Password === "") return alert("Enter the login details")

        if (user === "Deepak@gmail.com" && Password === "1234") {



            setLoggedin(true)


        }
        else alert("Enter details are invalid")

    }

    function forgetpass() {

        alert("Your passwpord is 1234")
    }


    return (
        <>
        

            <div className="login_main_div">
                {loggedin ?

                    <div className="login_main_page">
                        <h2>You have sucessfully logged in <button onClick={() => setLoggedin(false)}>Logout</button></h2>

                        <h2>Go to Home Page <Link to="/"><button>Home</button></Link></h2>
                    </div>
                    :

                    <div className="login_form">
                        <h1>Login</h1>
                        <label>Name</label>
                        <input type="Text" placeholder="Enter Your Name.." onChange={(Name) => setName(Name.target.value)} value={name} />
                        <label>Username</label>
                        <input type="email" placeholder="Enter Your Username.." onChange={(useName) => setUser(useName.target.value)} value={user} />
                        <label>Password</label>
                        <input type="Password" placeholder="Enter your Password." onChange={(pass) => setPassword(pass.target.value)} value={Password} />

                        <h5 onClick={forgetpass}>Forgot Password</h5>

                        <div className="l_btn">
                            <button onClick={logintosite}>Login</button>
                        </div>

                        <h4>Or Sign Up Using</h4>

                        <div className="l_icon">
                            <GoogleIcon />
                            <FacebookIcon />
                            <TwitterIcon />

                        </div>
                    </div>

                }

            </div>




        </>)

}

export default Login
