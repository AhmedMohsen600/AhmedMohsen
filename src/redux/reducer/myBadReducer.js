import { ACTIVE } from "../../constant/actions";

const initialState = {
  active: false,
};

const myBagReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE:
      return {
        ...state,
        active: action.payload === "close" ? false : !state.active,
      };
    default:
      return {
        ...state,
      };
  }
};

export default myBagReducer;
