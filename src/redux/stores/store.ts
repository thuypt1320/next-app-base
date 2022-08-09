import { legacy_createStore as createStore } from "redux";
import { reducers } from "redux/reducers";
import { middlewares } from "redux/middlewares";

export const store = createStore(reducers, middlewares);
export const authSelector = state => state.auth;

export const dispatch = store.dispatch;
