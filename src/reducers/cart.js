import {
  GET_CART_START,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
  ADD_CART,
  ADD_CART_ERROR,
  REMOVE_CART,
  REMOVE_CART_ERROR

} from "../actions/types";

const cartState = {
  isLoading: false,
  cart: [],
  message: ''
}

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case GET_CART_START:
      return {
        ...state,
        isLoading: true,
        message: ''
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        isLoading: false
      }
    case GET_CART_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: false
      }
    case ADD_CART:
      return {
        ...state,
        message: action.payload.message,
        cart: action.payload.data
      }

    case ADD_CART_ERROR:
      return {
        ...state,
        message: action.payload
      }

    case REMOVE_CART:
      // console.log('removed')
      // const b=state.cart.filter(({cart}) => {
      //   return cart.id != action.id
      // })

      return {
        ...state,
        message: action.payload,
        cart: state.cart.filter(({ cart }) => {
          return cart.id != action.id
        })
      }
    case REMOVE_CART_ERROR:
      return { ...state, message: action.payload }

    default:
      return state;
  }
}

export default cartReducer