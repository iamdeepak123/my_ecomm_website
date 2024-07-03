

const LoginReducer = (state, action) => {

    if(action.type === "LOG_IN"){

        // const {displayName, photoURL} = action.payload;

        return{
            ...state,
            name:action.payload.displayName,
            image:action.payload.photoURL,
            loggedin: true,
        }
    }

    if(action.type ==="LOG_OUT"){

        return{
            ...state,
            name: "",
            loggedin: false,
            image: "",
        }
    }


    return state
}
export default LoginReducer