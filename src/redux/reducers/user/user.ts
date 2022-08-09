import { UserActionTypes } from "redux/action_types";
import { IUser } from "types";
interface IUserState {
  data?: IUser[],
  user?: IUser
}

interface IUserAction {
  type: UserActionTypes,
  payload: IUserState
}
const initialState: IUserState = { data: [] };

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
        ...action.payload
      };
    case UserActionTypes.UPDATE:
      return {
        ...state,
        ...action.payload
      };
    case UserActionTypes.REMOVE:
      return {};
    default:
      return state;
  }
};
