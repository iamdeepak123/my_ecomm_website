

const ProductReducer = (state, action) => {
    if (action.type === "MY_DATA") {
        return {
            ...state,
            products: action.payload,
            featureProducts: action.payload.filter((elem) => {

                return elem.featured === true;

            })
        }
    }

    if (action.type === "ERROR") {
        return {
            ...state,
            isError: true,

        }

    }
    if (action.type === "SINGLE_DATA") {
        return {
            ...state,
            singleProduct: action.payload

        }

    }  if (action.type === "SINGLE_ERROR") {
        return {
            ...state,
            isError: true,

        }

    }


    return state
}

export default ProductReducer