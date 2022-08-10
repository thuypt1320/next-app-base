import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "redux/stores";
import { getDetail } from "redux/actions";

export const useFetchUser = () => {
  const data = useSelector(userSelector);
  const dispatch = useDispatch();

  const loading = !data?.loading;

  return {
    data: data.user, loading,
    getDetail: (id: string) => {
      dispatch(getDetail({ id }));
    }
  };
};
