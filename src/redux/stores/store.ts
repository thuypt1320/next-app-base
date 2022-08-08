import { legacy_createStore as createStore } from "redux";
import { reducers } from "redux/reducers";
import { middlewares } from "redux/middlewares";
import { getProfile, ILoginPayload, login, logout } from "redux/actions";

export const store = createStore(reducers, middlewares);
export const authSelector = state => state.auth;
export const selector = state => state;

const dispatch = store.dispatch;

export const authDispatch = () => {
  return {
    login: (payload: ILoginPayload) => {
      dispatch(login(payload));
    },
    getProfile: () => {
      dispatch(getProfile({}));
    },
    logout: () => {
      dispatch(logout());
    }
  };
};

