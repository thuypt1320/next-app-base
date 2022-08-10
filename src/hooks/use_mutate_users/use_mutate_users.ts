import { useDispatch } from "react-redux";
import { create, remove, update } from "redux/actions";

export const useMutateUsers = () => {
  const dispatch = useDispatch();

  return {
    create: (params) => dispatch(create(params)),
    update: (params) => dispatch(update(params)),
    remove: (params) => dispatch(remove(params)),
  };
};
