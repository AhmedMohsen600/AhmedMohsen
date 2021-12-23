import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";

const rootReducers = combineReducers({
  categories: categoriesReducer,
});

export default rootReducers;
