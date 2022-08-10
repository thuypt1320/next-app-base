import { Button } from "@chakra-ui/react";
import { ModalUser } from "components/templates/home/components/modal_user";
import { useDisclosure } from "@chakra-ui/hooks";
import { useMutateUsers } from "hooks/use_mutate_users";

export const UserCreateButton = () => {
  const { create } = useMutateUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleOnSubmit = (formValue) => {
    create(formValue);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Create</Button>
      <ModalUser isOpen={isOpen} onClose={onClose} onSubmit={handleOnSubmit}/>
    </>
  );
};
