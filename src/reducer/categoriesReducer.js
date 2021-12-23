import { LOAD_CATEGORIES } from "../constant/actions";
const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      return {
        ...state,
      };
  }
};

export default categoriesReducer;
