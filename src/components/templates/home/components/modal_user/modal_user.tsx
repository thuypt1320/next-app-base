import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalProps } from "@chakra-ui/modal";
import { IUser } from "types";
import { FC } from "react";
import { FormUser } from "components/templates/home/components/form_user";

interface IModalUserProps extends Omit<ModalProps, 'children'> {
  data?: IUser
  type?: "update" | "create",
  onSubmit?: (formValue) => void
  onDelete?: () => void
}

const defaultData = {
  name: "",
  email: ""
};

export const ModalUser: FC<IModalUserProps> = ({
  type = "create",
  data = defaultData,
  onSubmit,
  onDelete,
  ...props
}) => {
  const handleSubmit = (formValue) => {
    onSubmit(formValue);
  };

  return (
    <Modal {...props} >
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>
          {type?.toUpperCase()}
        </ModalHeader>
        <ModalBody>
          <FormUser value={data} onSubmit={handleSubmit} onDelete={type === 'update' ? onDelete : undefined}/>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
