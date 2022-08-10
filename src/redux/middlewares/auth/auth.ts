import { AuthActionTypes } from "redux/action_types";
import { authRepository } from "repositories";
import { getProfile, login, logout } from "redux/actions";
import { storageService } from "services/index";
import { credentialKeyStorage } from "services/storage_service";

export const authMiddleware = store => next => async action => {
  const credential = storageService.get(credentialKeyStorage);
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      const res = await authRepository.login(action.payload);
      if (action.payload.username === res.data[0].user.name && action.payload.password === 'password') {
        storageService.set(credentialKeyStorage, res.data[0]);
        return next(login({ ...res.data[0], loading: Boolean(!res.data) }));
      }
      return next(action);
    }
    case AuthActionTypes.GET_PROFILE: {
      const res = await authRepository.getProfile(action.payload);
      return next(getProfile({ ...res.data, loading: Boolean(!res.data) }));
    }
    case AuthActionTypes.LOGOUT: {
      await authRepository.logout();
      storageService.remove(credentialKeyStorage);
      return next(logout());
    }
    default: {
      return next(action);
    }
  }
};
