import { useDispatch, useSelector } from "react-redux";
import { getProfile, ILoginPayload, login, logout } from "redux/actions";
import { authSelector } from "redux/stores";

export const useAuth = () => {
  const data = useSelector(authSelector);
  const dispatch = useDispatch();

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

