import { PRODUCT_DETAILS } from "../../constant/actions";

const intitialState = {
  data: {},
};

const prodcutDetailsReducer = (state = intitialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS:
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

export default prodcutDetailsReducer;
