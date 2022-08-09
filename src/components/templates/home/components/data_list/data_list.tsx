import { IUser } from "types";
import { FC, useState } from "react";
import { Table } from "components/atoms/table";
import { useFetchUser } from "hooks/use_fetch_user";
import { ModalUser } from "components/templates/home/components/modal_user";
import { useDisclosure } from "@chakra-ui/hooks";
import { useMutateUsers } from "hooks/use_mutate_users";
interface IDataListProps {
  data?: IUser[]
}

export const DataList: FC<IDataListProps> = ({ data }) => {
  const [userId, setUserId] = useState<string>();
  const { data: user } = useFetchUser({ id: userId });
  const { update } = useMutateUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const updateState = () => {
    return userId;
  };

  const handleOnClick = (value?: IUser) => {
    setUserId(value.id);
    updateState();
    onOpen();
  };

  const handleUpdate = (formValue) => {
    update(formValue);
    onClose();
  };

  return (
    <>
      <Table
        data={data}
        onClickRow={handleOnClick}
      />
      <ModalUser data={user} isOpen={isOpen} onClose={onClose} type={"update"} onSubmit={handleUpdate}/>
    </>
  );
};
