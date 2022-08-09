import { combineReducers } from "redux";
import { authReducer } from "redux/reducers/auth";
import { userReducer } from "redux/reducers/user";

export const reducers = combineReducers({
  auth: authReducer,
  user: userReducer
});
