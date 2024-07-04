import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import Googleimage from "../images/loginwithGoogle.png";
import LoginOutContext from '../Context/LogInOutContext';




function Login() {

    const [userdetails, setUserdetails] = useState({
        name: "",
        email: "",
        password: "",

    })
    const { googlesignup, LoggedOut,Userdata} = useContext(LoginOutContext);

    const updatedata = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserdetails({ ...userdetails, [name]: value })

    }
    const { name, email, password } = userdetails;

    const logInButton = (e) => {
        e.preventDefault();
        if (name && email && password) {

            setUserdetails({
                name: "",
                email: "",
                password: "",
            })
        } else {
            alert("Enter the details")
        }
    }
    function forgetpass() {
        alert("Your passwpord is 1234")
    }

   

  

    return (
        <>
            <div className="login_main_div">
                {Userdata.loggedin ?
                    <div className="login_main_page">
                        <h2>You have sucessfully logged in <button onClick={LoggedOut}>Logout</button></h2>
                        <h2>Go to Home Page <Link to="/"><button>Home</button></Link></h2>
                    </div>
                    :
                    <div className="login_form">
                        <h1>Login</h1>
                        <form action="">
                            <input name="name" type="Text" placeholder="Full Name" onChange={updatedata} value={userdetails.name} />
                            <input name="email" type="email" placeholder="Username" onChange={updatedata} value={userdetails.email} />
                            <input name="password" type="Password" placeholder="Password" onChange={updatedata} value={userdetails.password} />
                            <h5 onClick={forgetpass}>Forgot Password ?</h5>
                            <div className="l_btn">
                                <button onClick={logInButton}>LOGIN</button>
                            </div>
                            <h4>Or SignUp Using</h4>
                            <div className="l_icon">
                                <img onClick={googlesignup} src={Googleimage} alt="Google" />
                            </div>
                        </form>
                    </div>

                }

            </div>




        </>)

}

export default Login
