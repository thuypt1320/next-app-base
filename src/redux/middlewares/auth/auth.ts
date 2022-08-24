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
      const isAllowed = (action.payload.username === res.data[0]?.user?.name && action.payload.password === 'password')
        || action.payload.type === 'google';

      if (res.data) {
        if (isAllowed) {
          next(login(res.data[0]));
          const profile = await authRepository.getProfile();
          if (profile.data) {
            storageService.set(credentialKeyStorage, { user: profile.data[0], access_token: res.data[0].access_token });
            next(getProfile({ user: profile.data[0] }));
          }
        }
      }
      break;
    }
    case AuthActionTypes.GET_PROFILE: {
      if (credential) {
        const res = await authRepository.getProfile();
        if (res.data) return next(getProfile({ user: res.data[0] }));
      }
      break;
    }
    case AuthActionTypes.LOGOUT: {
      storageService.remove(credentialKeyStorage);
      return next(logout());
    }
    default: {
      return next(action);
    }
  }
};
