import { createContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/LoginReducer"
import { auth, provider} from "../Firebase/firebase";
import { signInWithPopup } from 'firebase/auth';


const LoginOutContext = createContext();

const LoginProvider = ({ children }) => {
    const name = () => {
        let response = JSON.parse(localStorage.getItem("userrr"));
        let Name = response.name;
        return Name
    }

    const loggin = () => {
        let response = JSON.parse(localStorage.getItem("userrr"));
        let active =response.loggedin;
        return active
    }

    const imagefun = () => {
        let response = JSON.parse(localStorage.getItem("userrr"));
    
        let img = response.image;
        return img
    }
    const initialState = {
        name: name(),
        loggedin: loggin(),
        image: imagefun(),
    }



    const [state, dispatch] = useReducer(reducer, initialState);

    const googlesignup = () => {
        signInWithPopup(auth, provider).then((data) => {
            console.log(data.user);
            console.log(data.user.displayName);
            dispatch({ type: "LOG_IN", payload: data.user })

        })

    }

    useEffect(()=>{
      localStorage.setItem("userrr", JSON.stringify(state));
    },[state])
    

    const LoggedOut = () => {
        dispatch({ type: "LOG_OUT" })


    }

    return (
        <LoginOutContext.Provider value={{ ...state, googlesignup, LoggedOut }}>
            {children}
        </LoginOutContext.Provider>
    )

}

export default LoginOutContext;
export { LoginProvider }
