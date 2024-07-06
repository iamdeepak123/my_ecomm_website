

const LoginReducer = (state, action) => {

    if(action.type === "LOG_IN"){

        let details = {
            name:action.payload.displayName,
            image:action.payload.photoURL,
            loggedin: true,
        }

        return{
            ...state,
            Userdata: details,
        }
    }

    if(action.type ==="LOG_OUT"){
        let details = {
            name:"",
            image:"",
            loggedin: false,
        }
        return{
            ...state,
           Userdata: details,
        }
    }


    return state
}
export default LoginReducer