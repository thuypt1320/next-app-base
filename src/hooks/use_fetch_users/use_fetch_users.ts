import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "redux/stores";
import { useEffect } from "react";
import { UserActionTypes } from "redux/action_types";

export const useFetchUsers = () => {
  const data = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.data) dispatch({ type: UserActionTypes.GET_LIST });
  }, [dispatch, data]);

  return {
    data: data.data,
  };
};
