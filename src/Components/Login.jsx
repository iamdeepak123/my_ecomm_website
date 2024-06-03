import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';
// import PersonIcon from '@mui/icons-material/Person';
// import HttpsIcon from '@mui/icons-material/Https';
function Login() {

    const [user, setUser] = useState("")
    const [Password, setPassword] = useState("")

    function logintosite() {
        // console.log(user + Password);
        if (user === "" && Password === "") return alert("Enter the login details")

        if (user === "Deepak@gmail.com" && Password === "1234") return alert("Login is sucessful")
        else alert("Enter details are invalid")

    }

    function forgetpass() {

        alert("Your passwpord is 1234")
    }
    return (
        <>
            <div className="login_main_div">

                <div className="login_form">
                    <h1>Login</h1>
                    <label>Username</label>
                    <input type="email" placeholder="Enter Your Email.."  onChange={(useName) => setUser(useName.target.value)}  value={user}  />
                    <label>Password</label>
                    <input type="Password" placeholder="Enter your Password." onChange={(pass) => setPassword(pass.target.value)}  value={Password} />
                    
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



            </div>


        </>)

}

export default Login