import { IUser } from "types";
import { FC, useState } from "react";
import { Table } from "components/atoms/table";
import { useFetchUser } from "hooks/use_fetch_user";
import { ModalUser } from "components/templates/home/components/modal_user";
import { useDisclosure } from "@chakra-ui/hooks";
import { useMutateUsers } from "hooks/use_mutate_users";
import { useFetchUsers } from "hooks/use_fetch_users";
interface IDataListProps {
  data?: IUser[]
}

export const DataList: FC<IDataListProps> = () => {
  const { data: user, getDetail } = useFetchUser();
  const { data } = useFetchUsers();
  const { update } = useMutateUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState(user?.id);

  const handleOnClick = (value?: IUser) => {
    getDetail(value.id);
    setSelectedUser(value.id);
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
      {selectedUser === user?.id &&
      <ModalUser data={user} isOpen={isOpen} onClose={onClose} type={"update"} onSubmit={handleUpdate}/>}
    </>
  );
};
