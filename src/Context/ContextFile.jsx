import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducers/ProductReducer"

const productContext = createContext();

const API = "https://api.pujakaitem.com/api/products";



const AppProvider = ({ children }) => {

    const initialState = {
        isError: false,
        products: [],
        featureProducts: [],
        singleProduct: {}
    };

    const [state, dispatch] = useReducer(reducer, initialState)

    const getproducts = async (url) => {
        try {
            const res = await axios.get(url)
            const products = await res.data;
            dispatch({ type: "MY_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "ERROR" })

        }

    }

    const getSingleProduct = async (url) => {
        try {
            const res = await axios.get(url)
            const singleProduct = await res.data;
            dispatch({ type: "SINGLE_DATA", payload: singleProduct })
        } catch (error) {
            dispatch({ type: "SINGLE_ERROR" })

        }

    }

    useEffect(() => {
        getproducts(API);
     

    }, [])

    return (

        <productContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </productContext.Provider>

    )
}


export default productContext
export { AppProvider }