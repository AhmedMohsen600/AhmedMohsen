import { PRODUCT_DETAILS } from "../../constant/actions";

export const productDetails = (product) => (dispatch) => {
  dispatch({
    type: PRODUCT_DETAILS,
    payload: product,
  });
};
