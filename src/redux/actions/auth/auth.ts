import { AuthActionTypes } from "redux/action_types";

export interface ILoginPayload {
  username?: string,
  password?: string,
  type?: string
}

export const login = (payload: ILoginPayload) => {
  return {
    type: AuthActionTypes.LOGIN,
    payload
  };
};

export const getProfile = payload => {
  return {
    type: AuthActionTypes.GET_PROFILE,
    payload
  };
};

export const logout = () => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};

