import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import cartsReducer from "./cartsReducer";
import myBagReducer from "./myBadReducer";
const rootReducers = combineReducers({
  categories: categoriesReducer,
  carts: cartsReducer,
  active: myBagReducer,
});

export default rootReducers;
