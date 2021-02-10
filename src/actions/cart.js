import CartService from '../services/cart.service';
import {
    GET_CART_START,
    GET_CART_SUCCESS,
    GET_CART_ERROR,
    ADD_CART,
    ADD_CART_ERROR,
    REMOVE_CART,
    REMOVE_CART_ERROR

  } from "./types";

export const getCart = ( userId ) => dispatch => {
    console.log(userId);
    dispatch({type: GET_CART_START  });
    return CartService.getByUserId(userId)
    .then(
      (response) => {
        dispatch({
          type: GET_CART_SUCCESS,
          payload: response.data,
        });

        return Promise.resolve();
      })
      .catch(error=> dispatch({type: GET_CART_ERROR, payload: error}));
}


export const addCart = ( cart ) => dispatch => {
    return CartService.add(cart)
    .then(
      (response) => {
        dispatch({
          type: ADD_CART,
          payload: response.data
        });

        return Promise.resolve();
      })
      .catch(error=> dispatch({type: ADD_CART_ERROR, payload: error}));
}

export const removeCart = (id) => dispatch => {
    return CartService.delete(id)
    .then(
      (response) => {
        dispatch({
          type: REMOVE_CART,
          payload: response.data,
          id
        });

        return Promise.resolve();
      })
      .catch(error=> dispatch({type: REMOVE_CART_ERROR, payload: error}));

}

