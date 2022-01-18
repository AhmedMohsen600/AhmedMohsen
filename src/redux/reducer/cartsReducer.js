import {
  ADD_TO_CART,
  UPDATE_PRODUCT_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../../constant/actions";
// import produce from "immer";

const initialState = {
  data: [],
};
const cartsReducer = (state = initialState, action) => {
  const product = action.payload;
  const exist = state?.data?.find((item) => item?.id === product?.id);

  switch (action.type) {
    case ADD_TO_CART:
      // if Prodcut Alredy Exsit do not add it again.
      if (exist)
        return {
          ...state,
        };
      return {
        ...state,
        data: [...state.data, { ...product, qtx: 1 }],
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
    case INCREMENT_ITEM:
      if (exist) {
        const newData = state.data.map((item) =>
          item.id === product.id ? { ...item, qtx: item.qtx + 1 } : item
        );
        return {
          ...state,
          data: newData,
        };
      }
      break;
    case DECREMENT_ITEM:
      if (exist.qtx === 1)
        return {
          ...state,
          data: state.data.filter((item) => item.id !== exist.id),
        };
      else
        return {
          ...state,
          data: state.data.map((item) =>
            item.id === product.id ? { ...item, qtx: item.qtx - 1 } : item
          ),
        };

    default:
      return {
        ...state,
      };
  }
};

export default cartsReducer;

// state.map((item) => (item.id === product.id ? { ...state } : item));

// const nextState = produce(state, (draft) => {
//   const index = draft.data.findIndex((item) => item.id === product.id);
//   const item = draft.data[index];
//   if (index !== -1) {
//     draft.data[index] = { ...item, qtx: !item.qtx ? 2 : item.qtx + 1 };
//   }
// });
// return state;
