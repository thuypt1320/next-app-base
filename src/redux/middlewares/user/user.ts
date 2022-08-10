import { UserActionTypes } from "redux/action_types";
import { userRepository } from "repositories/index";
import { create, getDetail, getList, remove, update } from "redux/actions";
export const userMiddleware = store => next => async action => {
  switch (action.type) {
    case UserActionTypes.GET_LIST: {
      const res = await userRepository.list();
      return next(getList({ data: res.data }));
    }
    case UserActionTypes.GET_DETAIL: {
      const res = await userRepository.detail(action.payload);
      return next(getDetail({ user: res.data }));
    }
    case UserActionTypes.CREATE: {
      const res = await userRepository.create(action.payload);
      return next(create({ ...res.data }));
    }
    case UserActionTypes.UPDATE: {
      const res = await userRepository.update(action.payload);
      return next(update({ user: res.data }));
    }
    case UserActionTypes.REMOVE: {
      const res = await userRepository.remove(action.payload);
      return next(remove({ ...res.data }));
    }
    default:
      return next(action);
  }
};
