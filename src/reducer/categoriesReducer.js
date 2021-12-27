import { LOAD_CATEGORIES, CHANGE_CATEGORY } from "../constant/actions";
const initialState = {
  data: {
    all: { products: [] },
    clothes: { products: [] },
    tech: { products: [] },
  },
  currentCategory: "all",
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return {
        ...state,
        data: action.payload,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default categoriesReducer;
