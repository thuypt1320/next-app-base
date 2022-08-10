import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "redux/stores";
import { UserActionTypes } from "redux/action_types";
import { useEffect } from "react";

export const useFetchUsers = () => {
  const data = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: UserActionTypes.GET_LIST });
  }, [dispatch]);

  return {
    data: data.data,
  };
};
