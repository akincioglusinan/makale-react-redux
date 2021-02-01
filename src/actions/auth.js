//import { api } from './api'

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "./types";
  
  import AuthService from "../services/auth.service";
  
  export const register = (firstname, lastname, email, password) => (dispatch) => {
    return AuthService.register(firstname, lastname, email, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
      (response) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: response },
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };

// export const login = ({ Email, Password }) => dispatch => {
//     api()
//         .post('/auth/login', { Email, Password })
//         .then((response) => {
//             if (response.data.accessToken) {
//                 localStorage.setItem("user", JSON.stringify(response.data));
//             }
//         })
//         .catch((error) => {
//             dispatch({
//                 type: "LOGIN_ERROR",
//                 payload: error
//             });
//         });
// }