import { UserActionTypes } from "redux/action_types";

export const getList = (payload) => {
  return {
    type: UserActionTypes.GET_LIST,
    payload
  };
};

export const getDetail = (payload) => {
  return {
    type: UserActionTypes.GET_DETAIL,
    payload
  };
};

export const create = (payload) => {
  return {
    type: UserActionTypes.CREATE,
    payload
  };
};

export const update = (payload) => {
  return {
    type: UserActionTypes.UPDATE,
    payload
  };
};

export const remove = (payload) => {
  return {
    type: UserActionTypes.REMOVE,
    payload
  };
};
