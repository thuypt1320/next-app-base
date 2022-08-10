import { UserActionTypes } from "redux/action_types";
import { userRepository } from "repositories/index";
import { create, getDetail, getList, remove, update } from "redux/actions";
import { storageService } from "services/index";
import { credentialKeyStorage } from "services/storage_service";

export const userMiddleware = store => next => async action => {
  const credential = storageService.get(credentialKeyStorage);
  switch (action.type) {
    case UserActionTypes.GET_LIST: {
      if (credential) {
        const res = await userRepository.list();
        if (res.data) return next(getList({ data: res.data }));
      }
      break;
    }
    case UserActionTypes.GET_DETAIL: {
      if (credential) {
        const res = await userRepository.detail(action.payload);
        if (res.data) return next(getDetail({ user: res.data }));
      }
      break;
    }
    case UserActionTypes.CREATE: {
      if (credential) {
        const res = await userRepository.create(action.payload);
        if (res.data) return next(create({ user: res.data }));
      }
      break;
    }
    case UserActionTypes.UPDATE: {
      if (credential) {
        const res = await userRepository.update(action.payload);
        if (res.data) return next(update({ user: res.data }));
      }
      break;
    }
    case UserActionTypes.REMOVE: {
      if (credential) {
        const res = await userRepository.remove(action.payload);
        if (res.data) return next(remove({ user: res.data }));
      }
      break;
    }
    default:
      return next(action);
  }
};
