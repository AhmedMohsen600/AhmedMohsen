import { client } from "../../service/apollo";
import { GET_PRODUCT } from "../../service/queries/get-product";
import { GET_PRODUCT as PRODUCT } from "../../constant/actions";
export const getProduct = (id) => async (dispatch) => {
  const {
    data: { product },
  } = await client.query({
    query: GET_PRODUCT,
    fetchPolicy: "no-cache",
    variables: {
      id,
    },
  });

  dispatch({
    type: PRODUCT,
    payload: {
      product,
      isLoading: true,
    },
  });
};

export const updateProduct = (updatedProduct) => (dispatch) => {
  dispatch({
    type: "UPDATE_PRODUCT",
    payload: updatedProduct,
  });
};
