import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import cartsReducer from "./cartsReducer";
import myBagReducer from "./myBadReducer";
import currenciesReducer from "./currenciesReducer";
import productReducer from "./productReducer";
const rootReducers = combineReducers({
  categories: categoriesReducer,
  carts: cartsReducer,
  active: myBagReducer,
  currencies: currenciesReducer,
  product: productReducer,
});

export default rootReducers;
