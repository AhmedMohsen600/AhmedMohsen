import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import cartsReducer from "./cartsReducer";
import myBagReducer from "./myBadReducer";
import prodcutDetailsReducer from "./productDetailsReducer";
const rootReducers = combineReducers({
  categories: categoriesReducer,
  carts: cartsReducer,
  active: myBagReducer,
  product: prodcutDetailsReducer,
});

export default rootReducers;
