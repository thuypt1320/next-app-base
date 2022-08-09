import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "redux/stores";
import { useEffect } from "react";
import { getDetail } from "redux/actions";

export const useFetchUser = (params?: { id?: string }) => {
  const data = useSelector(userSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(params));
  }, [params.id, dispatch]);

  return { data: data.user };
};
