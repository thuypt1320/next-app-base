import { useDispatch } from "react-redux";
import { create, remove, update } from "redux/actions";
import { useEffect } from "react";
import { UserActionTypes } from "redux/action_types";

export const useMutateUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: UserActionTypes.GET_LIST });
  }, [dispatch]);

  return {
    create: (params) => dispatch(create(params)),
    update: (params) => dispatch(update(params)),
    remove: (params) => dispatch(remove(params)),
  };
};
