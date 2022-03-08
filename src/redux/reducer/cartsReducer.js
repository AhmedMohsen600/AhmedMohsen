import {
  ADD_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../../constant/actions";
import { generateCartKey } from "../../helper/generateCartKey";
import { updateData } from "../../helper/updateCartsData";
const initialState = {
  data: [],
};

const cartsReducer = (state = initialState, action) => {
  if (
    !(
      action.type === ADD_TO_CART ||
      action.type === INCREMENT_ITEM ||
      action.type === DECREMENT_ITEM
    )
  )
    return state;

  const product = { ...action.payload };

  // set the value of selectedAttributes to the first value of items if it empty.
  product.attributes = product.attributes?.map((attrib) => {
    const attribute = { ...attrib };
    if (!attribute.selectedAttribute)
      attribute.selectedAttribute = attribute.items[0];

    return attribute;
  });

  product.cartKey = generateCartKey(product);

  const doesExistInCart = state.data.find(
    (item) => item.cartKey === product.cartKey
  );

  console.log(doesExistInCart);
  switch (action.type) {
    case ADD_TO_CART:
      // if Prodcut Alredy Exsit increase the qtx.
      if (doesExistInCart) {
        return {
          ...state,
          data: updateData(state.data, doesExistInCart, true),
        };
      }
      return {
        ...state,
        data: [...state.data, { ...product, qtx: 1 }],
      };

    case INCREMENT_ITEM:
      return {
        ...state,
        data: updateData(state.data, doesExistInCart, true),
      };
    case DECREMENT_ITEM:
      const decrementItem = state.data.map((item) =>
        item.cartKey === doesExistInCart.cartKey
          ? { ...item, qtx: item.qtx - 1 }
          : item
      );
      return {
        ...state,
        data:
          doesExistInCart.qtx === 1
            ? updateData(state.data, doesExistInCart, false)
            : decrementItem,
      };
    default:
      return state;
  }
};

export default cartsReducer;
