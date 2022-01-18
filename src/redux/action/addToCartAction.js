import {
  ADD_TO_CART,
  UPDATE_PRODUCT_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../../constant/actions";

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

export const increaseItem = (product) => (dispatch) => {
  dispatch({
    type: INCREMENT_ITEM,
    payload: product,
  });
};

export const decrementItem = (product) => (dispatch) => {
  dispatch({
    type: DECREMENT_ITEM,
    payload: product,
  });
};
