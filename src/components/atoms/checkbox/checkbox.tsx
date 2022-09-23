import React, { useState } from "react";
import { Button, Flex, useCheckbox } from "@chakra-ui/react";

export interface ICheckboxProps {
}

export const Checkbox: React.FC<ICheckboxProps> = ({ ...props }) => {
  const { state, getInputProps, getCheckboxProps } = useCheckbox(props);
  return (
    <Flex as={"label"} border={"1px solid black"} w={"fit-content"} p={"10px"}>
      <input {...getInputProps()} value={state.isChecked ? "red" : "blue"} hidden/>
      <Button {...getCheckboxProps()} backgroundColor={state.isChecked ? "red" : "blue"}/>
    </Flex>
  );
};

export const CustomCheckbox: React.FC<ICheckboxProps> = ({ ...props }) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Flex as={"label"} htmlFor={"checkbox-id"} border={"1px solid black"}
          w={"fit-content"} p={"10px"}>
      <input type={"checkbox"} id={"checkbox-id"} checked={checked} value={checked ? "." : "-"}
             onChange={() => setChecked(!checked)} hidden/>
      <Button backgroundColor={checked ? "red" : "blue"}/>
    </Flex>
  );
};
