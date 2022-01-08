import { ADD_TO_CART, UPDATE_PRODUCT_CART } from "../../constant/actions";

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};
export const updateProductInCart = (product) => (dispatch) => {
  dispatch({
    type: UPDATE_PRODUCT_CART,
    payload: product,
  });
};
