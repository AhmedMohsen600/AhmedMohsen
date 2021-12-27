import { ADD_TO_CART } from "../constant/actions";

const initialState = {
  carts: [],
};
const cartsReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      //   if Prodcut Alredy Exsit do not add it again.
      const exsit = state.carts.find((item) => item.id === product.id);
      if (exsit)
        return {
          ...state,
        };

      return {
        ...state,
        carts: [...state.carts, product],
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartsReducer;

// state.map((item) => (item.id === product.id ? { ...state } : item));
