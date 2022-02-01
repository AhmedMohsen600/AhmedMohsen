import { CHANGE_CURRENCY, GET_CURRENCY } from "../../constant/actions";

const initialState = {
  data: [],
  currentSymbol: "$",
};

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY:
      return {
        ...state,
        data: action.payload,
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        currentSymbol: action.payload,
      };
    default:
      return state;
  }
};

export default currenciesReducer;
