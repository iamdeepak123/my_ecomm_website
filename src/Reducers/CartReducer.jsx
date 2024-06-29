

const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, tick, price, quantity, product } = action.payload;

    let exist = state.cart.find(
      (elem) => elem.id === id + tick
    );

    if (exist) {
      let update = state.cart.map((elem) => {
        if (elem.id === id + tick) {
          let newQuantity = elem.quantity + quantity;

          if (newQuantity >= elem.max) {
            newQuantity = elem.max;

          }
          return {
            ...elem,
            quantity: newQuantity,
          };
        } else {
          return elem;
        }


      });

      return {
        ...state,
        cart: update,

      }


    } else {

      let cartproduct = {
        id: id + tick,
        name: product.name,
        color: tick,
        quantity: quantity,
        image: product.image[0].url,
        price: price,
        max: product.stock,


      }
      
      return {
        ...state,
        cart: [...state.cart, cartproduct],

      }
    }
  }
  if (action.type === "REMOVE_ITEMS") {
    let updatedcart = state.cart.filter((elem) => elem.id !== action.payload)
    return {
      ...state,
      cart: updatedcart,
    }
  }

  if (action.type === "CLEAR_CART") {

    return {
      ...state,
      cart: [],

    }
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let initialval = state.cart.reduce((initial, elem) => {
      const { quantity } = elem;

      initial = initial + quantity;

      return initial;

    }, 0)
    return {
      ...state,
      total_quantity: initialval,
    }
  }

  if (action.type === "CART_TOTAL_PRICE") {
 
    let initialPrice = state.cart.reduce((initial, elem) => {
const{price, quantity} = elem;

initial = initial + quantity*price;

return initial;

    }, 0)

    return{
      ...state,
      total_price: initialPrice,
    }



  }
if(action.type === "LOGIN"){
  return{
    username: action.payload,
  }
}

  if (action.type === "SET_INCREMENT") {
    let updated = state.cart.map((elem) => {

      if (elem.id === action.payload) {

        if (elem.quantity < elem.max) {
          let Ivalue = elem.quantity + 1;
          return {
            ...elem,
            quantity: Ivalue,
          };
        } else {
          return {
            ...elem,
            quantity: elem.max,
          }
        }
      }
      else {
        return elem;
      }
    });
    return {
      ...state,
      cart: updated,
    }
  }


  if (action.type === "SET_DECREMENT") {
    let updated = state.cart.map((elem) => {
      if (elem.id === action.payload) {

        if (elem.quantity > 1) {
          let dvalue = elem.quantity - 1;
          return {
            ...elem,
            quantity: dvalue,
          }

        } else {
          return {
            ...elem,
            quantity: 1,
          }
        }
      } else {
        return elem;
      }
    })

    return {
      ...state,
      cart: updated,
    }
  }

  return state;
}

export default CartReducer