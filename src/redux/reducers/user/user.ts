import { UserActionTypes } from "redux/action_types";
import { IUser } from "types";

export interface IUserState {
  data?: IUser[],
  user?: IUser,
}

export interface IUserAction {
  type: UserActionTypes,
  payload: IUserState
}

const initialState: IUserState = {};

export const userReducer = (state: IUserState = initialState, action: IUserAction) => {
  switch (action.type) {
    case UserActionTypes.GET_LIST:
      return {
        ...state,
        ...action.payload
      };
    case UserActionTypes.GET_DETAIL:
      return {
        ...state,
        ...action.payload
      };
    case UserActionTypes.CREATE:
      return {
        ...state,
        ...{ data: [...state?.data, action.payload.user] }
      };
    case UserActionTypes.UPDATE: {
      const data = [...state?.data].map(item => item.id === action.payload.user.id ? action.payload.user : item);
      return {
        ...state,
        ...action.payload,
        data
      };
    }
    case UserActionTypes.REMOVE:
      const data = [...state.data].filter(item => item.id !== action.payload.user.id);
      return { ...state, ...{ data }, ...{ user: {} } };

    case UserActionTypes.SET_ERROR:
      return {};
    default:
      return state;
  }
};
