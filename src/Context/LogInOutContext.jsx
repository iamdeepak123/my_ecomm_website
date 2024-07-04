import { createContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/LoginReducer"
import { auth, provider } from "../Firebase/firebase";
import { signInWithPopup } from 'firebase/auth';


const LoginOutContext = createContext();

const LoginProvider = ({ children }) => {

    // let response = JSON.parse(localStorage.getItem("userrr"));

    // const initialState = {
    //     name: "",
    //     loggedin: false,
    //     image: "",
    // }



    const uName = () => {
        let response = JSON.parse(localStorage.getItem("userrr"));
        if (response === "null") {
            return "";

        } else
            return response.name;
    }

    const loggin = () => {
        let response = JSON.parse(localStorage.getItem("userrr"));

        if (response === "null") {
            return "";

        } else
            return response.loggedin;
    }

    const imagefun = () => {
        let response = JSON.parse(localStorage.getItem("userrr"));
        if (response === "null") {
            return "";

        } else
            return response.image;
    }
    const initialState = {
        name: uName(),
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

    useEffect(() => {
        localStorage.setItem("userrr", JSON.stringify(state));
    }, [state])


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