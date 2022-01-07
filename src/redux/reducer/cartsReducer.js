import { ADD_TO_CART } from "../../constant/actions";

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
        product,
      };
    // case "PRODUCT_DETAILS":
    //   const exsit = state.data.find((item) => item.id === product.id);
    //   if (exsit)
    //     return {
    //       ...state.product,
    //     };
    //   return {
    //     ...state,
    //     product: action.payload,
    //   };
    default:
      return {
        ...state,
      };
  }
};

export default cartsReducer;

// state.map((item) => (item.id === product.id ? { ...state } : item));
