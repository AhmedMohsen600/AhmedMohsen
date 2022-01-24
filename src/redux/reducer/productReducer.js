import { GET_PRODUCT } from "../../constant/actions";
const intitialState = {
  data: {
    gallery: [],
    prices: [],
    attributes: [],
  },
};

const prodcutReducer = (state = intitialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        data: action.payload.product,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default prodcutReducer;
