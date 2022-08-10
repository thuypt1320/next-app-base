import { IUser } from "types";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Input } from "components/atoms/input";
import { Button } from "@chakra-ui/react";
import { Card } from "components/atoms/card";
interface IFormUserProps {
  value?: IUser,
  onSubmit?: (value: unknown) => void,
  onDelete?: () => void
}

export const FormUser: FC<IFormUserProps> = ({ value, onSubmit, onDelete }) => {
  const { register, handleSubmit } = useForm();

  if (!value) return <></>;

  const fieldLabels = Object.keys(value);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card width={"max-content"} borderColor={"transparent"}>
        {
          fieldLabels.map((item, index) => {
            return <Input key={index} label={item} defaultValue={value[item]} {...register(item)}/>;
          })
        }
        <Button type={"submit"}>Submit</Button>
        {onDelete && <Button onClick={onDelete}>Delete</Button>}
      </Card>
    </form>
  );
};
