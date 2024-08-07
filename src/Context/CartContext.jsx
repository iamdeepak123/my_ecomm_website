import { createContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/CartReducer"


const CartContext = createContext();

const getCartData = () => {

    let localCartData = localStorage.getItem("mycart");
    if (localCartData === null) {

        return [];
    } else
        return JSON.parse(localCartData);


}


const CartProvider = ({ children }) => {

    const initialState = {

        // cart: [],
        cart: getCartData(),
        total_quantity: '',
        total_price: "",

    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const getToCart = (id, tick, price, quantity, product) => {

        dispatch({ type: "ADD_TO_CART", payload: { id, tick, price, quantity, product } })

    }

    const removeItems = (id) => {


        dispatch({ type: "REMOVE_ITEMS", payload: id })

    }

    const clearCart = () => {

        dispatch({ type: "CLEAR_CART" })

    }

    const Increment = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })

    }
    const Decrement = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })

    }



    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" })
        dispatch({ type: "CART_TOTAL_PRICE" })
        localStorage.setItem("mycart", JSON.stringify(state.cart))

    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, getToCart, removeItems, clearCart, Increment, Decrement }}>

            {children}
        </CartContext.Provider>
    )


}

export default CartContext;
export { CartProvider }