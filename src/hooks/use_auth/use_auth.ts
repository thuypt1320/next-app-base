import { useDispatch, useSelector } from "react-redux";
import { getProfile, ILoginPayload, login, logout } from "redux/actions";
import { authSelector } from "redux/stores";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const data = useSelector(authSelector);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => setLoading(!data.access_token), [data]);

  return {
    data,
    loading,
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

