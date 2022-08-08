import { combineReducers } from "redux";
import { authReducer } from "redux/reducers/auth";

export const reducers = combineReducers({
  auth: authReducer
});
