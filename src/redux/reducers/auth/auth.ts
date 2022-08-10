import { AuthActionTypes } from "redux/action_types";
import { IUser } from "types";
import { ILoginPayload } from "redux/actions";
import { storageService } from "services/index";
import { credentialKeyStorage } from "services/storage_service";
export interface AuthState {
  user?: IUser,
  access_token?: string,
}

export interface AuthAction {
  type: AuthActionTypes,
  payload: ILoginPayload
}

const credential = storageService.get(credentialKeyStorage);
const initialState: AuthState = credential || {};

export const authReducer = (state: AuthState | { error: boolean } = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        ...action.payload
      };
    }
    case AuthActionTypes.GET_PROFILE:
      return {
        ...state,
        ...action.payload
      };
    case AuthActionTypes.LOGOUT:
      return initialState;
    case AuthActionTypes.SET_ERROR:
      return { error: true };
    default:
      return state;
  }
};
