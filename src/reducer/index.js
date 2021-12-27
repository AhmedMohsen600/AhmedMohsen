import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import cartsReducer from "./cartsReducer";
const rootReducers = combineReducers({
  categories: categoriesReducer,
  carts: cartsReducer,
});

export default rootReducers;
