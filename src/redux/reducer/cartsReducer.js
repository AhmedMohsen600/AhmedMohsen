import { ADD_TO_CART, UPDATE_PRODUCT_CART } from "../../constant/actions";

const initialState = {
  data: [],
};
const cartsReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      //   if Prodcut Alredy Exsit do not add it again.
      const exsit = state.data.find((item) => item.id === product.id);
      if (exsit)
        return {
          ...state,
        };

      return {
        ...state,
        data: [...state.data, product],
      };
    case UPDATE_PRODUCT_CART:
      const productIndex = state.data.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex) {
        let cartData = state.data;
        cartData[productIndex] = product;
        return {
          ...state,
          data: cartData,
        };
      }
      break;
    default:
      return {
        ...state,
      };
  }
};

export default cartsReducer;

// state.map((item) => (item.id === product.id ? { ...state } : item));
