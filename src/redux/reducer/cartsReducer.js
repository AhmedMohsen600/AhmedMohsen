import {
  ADD_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../../constant/actions";
// import produce from "immer";

const initialState = {
  data: [],
};

const cartsReducer = (state = initialState, action) => {
  const product = { ...action.payload };
  const doesExistInCart = state.data.find((item) => item.id === product.id);
  // const attributes = state.data.map((item) => item.attributes);
  switch (action.type) {
    case ADD_TO_CART:
      // if Prodcut Alredy Exsit increase the qtx.
      if (doesExistInCart) {
        const newData = state.data.map((item) =>
          item.id === product.id ? { ...item, qtx: item.qtx + 1 } : item
        );

        return {
          ...state,
          data: newData,
        };
      }

      // get the first value of items if selectedAttribute is empty.
      product.attributes = product.attributes.map((attr) => {
        const attribute = { ...attr };
        if (!attribute.selectedAttribute) {
          attribute.selectedAttribute = attribute.items[0];
        }
        return attribute;
      });

      return {
        ...state,
        data: [...state.data, { ...product, qtx: 1 }],
      };

    case INCREMENT_ITEM:
      if (doesExistInCart) {
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
      if (doesExistInCart.qtx === 1)
        return {
          ...state,
          data: state.data.filter((item) => item.id !== doesExistInCart.id),
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
