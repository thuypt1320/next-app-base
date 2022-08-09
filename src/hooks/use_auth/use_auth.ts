import { useSelector } from "react-redux";
import { getProfile, ILoginPayload, login, logout } from "redux/actions";
import { authSelector, dispatch } from "redux/stores";

export const useAuth = () => {
  const data = useSelector(authSelector);

  return {
    data,
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

